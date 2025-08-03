import {
    Card,
    Divider,
    Row,
    Col,
    InputNumber,
    Select,
    theme,
    Button,
    Statistic,
    Table,
    TableColumnsType,
    Flex,
    Tag,
    Tooltip,
} from 'antd';
import { lighten } from 'polished';
import { bg } from '../App';
import { PetName, pets, type Pet } from '../data/pets';
import { useDispatch, useSelector } from '../hooks/Redux';
import { changePet, type Solutions, type PetState } from '../store/PetStore';
import { Colors, itemList, type colorNames, type color, ItemLists } from '../data/items';
import { CalcSolutions } from '../script/CalcSolutions';
import { changeBasic } from '../store/EggStore';
import { ReactNode, useRef } from 'react';

type petsOption = Pet & { smallLabel: string; value: PetName };

type SolutionType = {
    possibleLength: number;
    itemCombo: Array<ReactNode>;
    possiblePets: Solutions['possiblePets'];
} & colorNames;

const columnRecord = { possibleLength: '孵化可能', itemCombo: '孵化物品', ...Colors, time: '时间' };

const columns: TableColumnsType<SolutionType> = Object.entries(columnRecord).map(([key, title]) => {
    return {
        title,
        dataIndex: key,
        key,
        align: 'center',
        className: key in Colors ? `color color-${key}` : '',
        width: 50,
    };
});
columns[0].sorter = (a, b) => a.possibleLength - b.possibleLength;
columns[0].sortDirections = ['ascend', 'descend', 'ascend'];
columns[0].defaultSortOrder = 'ascend';
columns[0].width = 80;
columns[1].width = 500;

const petsOptions: Array<petsOption> = Object.values(pets).map((pet) => {
    const evo = pet.No + '.' + pet.name;
    const evo25 = (pet.evo25 && ' > ' + pets[pet.evo25].No + '.' + pet.evo25) || '';
    const evo50 = (pet.evo50 && ' > ' + pets[pet.evo50].No + '.' + pet.evo50) || '';
    return {
        ...pet,
        smallLabel: evo + evo25 + evo50,
        value: pet.name,
    };
});

const petTagColors = {
    无: 'lime',
    水: 'cyan',
    火: 'red',
    雷: 'purple',
    木: 'green',
    暗: 'magenta',
};

const itemTagColors = {
    powerUps: '#71ad58',
    eggItems: '#1e779f',
    otherItems: '#108ee9',
    equipments: '#c42528',
};

const itemTagCache = ['powerUps', 'eggItems', 'otherItems', 'equipments'].reduce((obj: Record<string, string>, key) => {
    Object.keys(itemList[key]).forEach((name) => {
        obj[name] = itemTagColors[key as keyof typeof itemTagColors];
    });
    return obj;
}, {});

function TargetStat(targetPet: Pet) {
    return (
        <>
            <Col span={2}>
                <Statistic title="#" value={targetPet.No} />
            </Col>
            <Col span={4}>
                <Statistic title="怪物名称" value={targetPet.name} />
            </Col>
            {(Object.entries(Colors) as Array<[color, string]>).map(([color, name]) => {
                const { min, max } = targetPet.colors[color];
                const isValid = min <= 500;
                const isInfinite = min == -999 && max == 999;

                const colorRange = !isValid ? '∞' : isInfinite ? '-' : `${min}~${max}`.replace('-999', '0');
                return (
                    <Col span={3} key={color}>
                        <Statistic title={name} value={colorRange} className={`color color-${color}`} />
                    </Col>
                );
            })}
        </>
    );
}

// TODO 拆分代码
const TargetApp: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { token } = theme.useToken();
    const dispatch = useDispatch();
    const { targetPet, solutions, errorText }: PetState = useSelector((state) => state.PetStore);
    const { colorMax } = useSelector((state) => state.EggStore);

    const show = solutions.length > 0;

    return (
        <Card ref={ref} style={{ backgroundColor: lighten(0.1, bg), backdropFilter: 'blur(4px)', marginTop: 20 }}>
            <Divider orientation="left" style={{ marginTop: 0 }}>
                孵化目标
            </Divider>
            <Row gutter={48}>
                <Col span={8}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Select
                                className="bold"
                                prefix="孵化目标"
                                style={{ width: '100%', height: '100%', textAlign: 'left' }}
                                showSearch
                                placeholder="选择或搜索"
                                filterOption={(input, option) => {
                                    return option?.smallLabel?.includes(input) || false;
                                }}
                                options={petsOptions}
                                optionRender={(option) => {
                                    return (
                                        <>
                                            <b>{option.data.name}</b>
                                            <div className="small">{option.data.smallLabel}</div>
                                        </>
                                    );
                                }}
                                onChange={(value: PetName) => {
                                    dispatch(changePet(value));
                                }}
                            />
                        </Col>
                        <Col span={16}>
                            <InputNumber
                                addonBefore={'计算结果个数'}
                                defaultValue="500"
                                min="1"
                                onChange={(value) => {
                                    dispatch(changeBasic({ maxSolutions: value }));
                                }}
                                style={{ '--color': token.colorTextDisabled }}
                            />
                        </Col>
                        <Col span={8}>
                            <Button
                                type="primary"
                                style={{ width: '100%' }}
                                onClick={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.disabled = true;
                                    if (CalcSolutions()) {
                                        // 异步渲染
                                        setTimeout(() => {
                                            if (ref.current) {
                                                ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        });
                                    }
                                    target.disabled = false;
                                }}>
                                开始计算
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={16}>
                    <Row gutter={[16, 16]}>{TargetStat(targetPet)}</Row>
                </Col>
            </Row>
            <Divider />

            <div style={{ textAlign: 'left', marginBottom: 10 }}>
                <div style={{ fontSize: 18, color: 'red', fontWeight: 700 }}>{errorText}</div>
                <div className={show ? '' : 'd-none'} style={{ color: 'aqua' }}>
                    提示：点击结果可展开显示详细内容（所有结果均可能孵化的<u>波波洛利</u>未在结果中展示）
                </div>
            </div>

            <Table<SolutionType>
                className={show ? '' : 'd-none'}
                size={'small'}
                scroll={{ y: 300 }}
                pagination={false}
                columns={columns}
                style={{
                    cursor: 'pointer',
                }}
                expandable={{
                    expandedRowRender: (record) => {
                        return (
                            <div style={{ margin: 10 }}>
                                <b>孵化可能：</b>
                                <Flex gap="4px 0" wrap>
                                    {record.possiblePets.map((name) => {
                                        const pet = pets[name];
                                        const isTarget = name == targetPet.name;
                                        return (
                                            <Tooltip
                                                key={name}
                                                styles={{ root: { maxWidth: 'unset' } }}
                                                title={
                                                    <Row style={{ width: '600px', textAlign: 'center' }}>
                                                        {TargetStat(pet)}
                                                    </Row>
                                                }
                                                trigger={'click'}>
                                                <Tag
                                                    color={
                                                        isTarget ? '#f50' : petTagColors[pet.element]
                                                    }>{`${pet.No}. ${name}`}</Tag>
                                            </Tooltip>
                                        );
                                    })}
                                </Flex>
                            </div>
                        );
                    },
                    expandRowByClick: true,
                    showExpandColumn: false,
                }}
                dataSource={solutions.map(({ possiblePets, itemCombo, color }, index) => ({
                    key: index,
                    possibleLength: possiblePets.length,
                    possiblePets: possiblePets,
                    itemCombo: itemCombo.map((name, index) => {
                        return (
                            <span onClick={(e) => e.stopPropagation()}>
                                <Tooltip
                                    key={index}
                                    styles={{ root: { maxWidth: 'unset' } }}
                                    title={
                                        <Row style={{ width: '500px', textAlign: 'center' }}>
                                            <Col span={4}>
                                                <Statistic title="名称" value={name} />
                                            </Col>
                                            {(Object.entries(Colors) as Array<[color, string]>).map(
                                                ([color, colorName]) => {
                                                    return (
                                                        <Col span={3} key={color}>
                                                            <Statistic
                                                                title={colorName}
                                                                value={ItemLists[name][color]}
                                                                className={`color color-${color}`}
                                                            />
                                                        </Col>
                                                    );
                                                },
                                            )}
                                            <Col span={2}>
                                                <Statistic title="时间" value={ItemLists[name].time} />
                                            </Col>
                                        </Row>
                                    }
                                    trigger={'click'}>
                                    <Tag key={index} color={itemTagCache[name]}>
                                        {name}
                                    </Tag>
                                </Tooltip>
                            </span>
                        );
                    }),
                    ...(Object.fromEntries(
                        Object.entries(color).map(([colorName, colorValue]) => [
                            colorName,
                            Math.min(colorValue, colorMax),
                        ]),
                    ) as colorNames),
                }))}
            />
        </Card>
    );
};

export default TargetApp;
