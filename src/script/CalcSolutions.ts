import { Colors, type color, type Item, type itemName, ItemLists } from '../data/items';
import { type ColorRange } from '../data/pets';
import { store } from '../store';
import { throwError, changeSolution, sumColor, validPets } from '../store/PetStore';

export const CalcSolutions = () => {
    const Store = store.getState();
    // 清除原有错误
    store.dispatch(throwError(''));
    // 剩余投喂次数、颜色上限、计算结果个数
    const { fillTimes, colorMax, maxSolutions, starUp } = Store.EggStore;
    // 孵化目标
    const TargetPet = Store.PetStore.targetPet;
    if (TargetPet.name == '波波洛利') {
        store.dispatch(throwError('请先选择非波波洛利孵化目标'));
        return;
    }
    // 孵化目标颜色范围
    const colorRange = Store.PetStore.targetPet.colors;

    const starValid = Object.values(colorRange).every((color) => color.min <= colorMax);
    if (!starValid) {
        store.dispatch(throwError('孵化目标颜色范围超过蛋星级颜色上限'));
        return;
    }
    // 孵化物品
    const BreedItem = Object.values(Store.ItemStore)
        .flat()
        .map((name: itemName) => {
            return ItemLists[name];
        });

    const COLORS: Array<color> = Object.keys(Colors) as Array<color>;
    // 蛋基础颜色
    const EggBaseColor = (() => {
        const { green, blue, yellow, red, purple, black } = Store.EggStore;
        return Object.entries({ green, blue, yellow, red, purple, black }).reduce(
            (acc, [key, value]) => {
                acc[key as keyof Item] = value + 20 * starUp;
                return acc;
            },
            { time: 0 } as Item,
        );
    })();

    // 结果
    const solutions = findOptimalSolutions(fillTimes);
    console.log(solutions);
    if (solutions.length == 0) {
        store.dispatch(throwError('选择的孵化物品无法孵化目标 或 计算错误'));
    }
    store.dispatch(changeSolution(solutions));
    return solutions;

    function findOptimalSolutions(count: number) {
        // 预处理孵化物品各颜色最小和最大值
        const colorExtremes: Record<string, ColorRange> = {};
        for (const color of COLORS) {
            const itemColors = BreedItem.map((b) => b[color]);
            colorExtremes[color] = {
                min: Math.min(...itemColors),
                max: Math.max(...itemColors),
            };
        }

        const solutions: Array<unknown> = [];
        const memo = new Array(count + 1).fill(undefined).map(() => new Set());

        function getStateKey(currentSums: Record<color, number>) {
            return COLORS.map((c) => currentSums[c]).join(',');
        }

        function getBreedItemScore(breedItem: Item, currentSums: Record<color, number>) {
            let score = 0;
            for (const color of COLORS) {
                const current = currentSums[color];
                const { min, max } = colorRange[color];
                if (current < min) {
                    score += breedItem[color] * (min - current);
                } else if (current > max) {
                    score -= breedItem[color] * (current - max);
                }
            }
            return score;
        }

        function backtrack(currentSelection: Array<Item>, currentSums: Record<color, number>, step: number) {
            if (solutions.length >= maxSolutions) {
                return;
            }
            if (step === count) {
                for (const color of COLORS) {
                    if (currentSums[color] < colorRange[color].min || currentSums[color] > colorRange[color].max) {
                        return;
                    }
                }
                const totalColors = sumColor([...currentSelection, EggBaseColor]);
                const validPet = validPets(totalColors, colorMax);
                // 满足范围后 返回解
                if (validPet.includes(TargetPet.name)) {
                    solutions.push({
                        possiblePets: validPet,
                        itemCombo: currentSelection
                            .map((i: Item) => Object.keys(ItemLists).find((key) => ItemLists[key] === i))
                            .reverse(),
                        color: totalColors,
                    });
                }

                return;
            }

            const stateKey = getStateKey(currentSums);
            if (memo[step].has(stateKey)) return;
            memo[step].add(stateKey);

            // 生成排序后的候选孵化物品
            const candidates = BreedItem.slice().sort((a, b) => {
                return getBreedItemScore(b, currentSums) - getBreedItemScore(a, currentSums);
            });

            for (const breedItem of candidates) {
                const newSums: Record<color, number> = {} as Record<color, number>;
                let isValid = true;
                for (const color of COLORS) {
                    newSums[color] = currentSums[color] + breedItem[color];
                }

                const remainingSteps = count - step - 1;
                for (const color of COLORS) {
                    const sum = newSums[color];
                    const { min, max } = colorRange[color];
                    const minAdd = colorExtremes[color].min * remainingSteps;
                    const maxAdd = colorExtremes[color].max * remainingSteps;

                    if (sum + maxAdd < min || sum + minAdd > max) {
                        isValid = false;
                        break;
                    }
                }

                if (isValid) {
                    backtrack([...currentSelection, breedItem], newSums, step + 1);
                }
            }
        }

        backtrack([], EggBaseColor, 0);
        return solutions;
    }
};
