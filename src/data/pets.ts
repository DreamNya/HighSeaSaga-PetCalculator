export type PetName = string;
type Element = '无' | '水' | '火' | '雷' | '木' | '暗';
type Size = '小' | '中' | '大';
type StatGrade = 'F' | 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
type Skill = string;

export type ColorRange = {
    min: number;
    max: number;
};
interface Stats {
    hp: StatGrade;
    sp: StatGrade;
    atk: StatGrade;
    def: StatGrade;
    spd: StatGrade;
    int: StatGrade;
}

export interface Pet {
    No: number;
    name: PetName;
    element: Element;
    size: Size;
    stats: Stats;
    skill: Skill;
    evo25: PetName | null;
    evo50: PetName | null;
    colors: {
        green: ColorRange;
        blue: ColorRange;
        yellow: ColorRange;
        red: ColorRange;
        purple: ColorRange;
        black: ColorRange;
    };
}

export const pets: Record<PetName, Pet> = {
    波波洛利: {
        No: 1,
        name: '波波洛利',
        element: '无',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'E',
            atk: 'F',
            def: 'F',
            spd: 'F',
            int: 'E',
        },
        skill: '无',
        evo25: '水滴君',
        evo50: '钛金君',
        colors: {
            green: {
                min: -999,
                max: 500,
            },
            blue: {
                min: -999,
                max: 500,
            },
            yellow: {
                min: -999,
                max: 500,
            },
            red: {
                min: -999,
                max: 500,
            },
            purple: {
                min: -999,
                max: 500,
            },
            black: {
                min: -999,
                max: 500,
            },
        },
    },
    梅塔可: {
        No: 2,
        name: '梅塔可',
        element: '无',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'D',
            atk: 'F',
            def: 'F',
            spd: 'F',
            int: 'E',
        },
        skill: '加速之术Ⅰ',
        evo25: '哔哩兔',
        evo50: '粉祐兔',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 15,
                max: 200,
            },
            yellow: {
                min: -999,
                max: 95,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 4,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    小海蛇: {
        No: 3,
        name: '小海蛇',
        element: '无',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'E',
            atk: 'F',
            def: 'F',
            spd: 'F',
            int: 'F',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '鲑鱼嘭',
        evo50: '丸太君',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 18,
                max: 200,
            },
            yellow: {
                min: -999,
                max: 98,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 5,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    淡黄水母: {
        No: 4,
        name: '淡黄水母',
        element: '水',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'F',
            atk: 'E',
            def: 'E',
            spd: 'E',
            int: 'E',
        },
        skill: '加速之术Ⅰ',
        evo25: '杉叶藻姐妹',
        evo50: '波哟嘭',
        colors: {
            green: {
                min: -999,
                max: 90,
            },
            blue: {
                min: 1,
                max: 90,
            },
            yellow: {
                min: 10,
                max: 200,
            },
            red: {
                min: 1,
                max: 90,
            },
            purple: {
                min: 6,
                max: 90,
            },
            black: {
                min: 1,
                max: 90,
            },
        },
    },
    加布龙头鱼: {
        No: 5,
        name: '加布龙头鱼',
        element: '水',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'E',
            atk: 'E',
            def: 'E',
            spd: 'E',
            int: 'E',
        },
        skill: '连续攻击α',
        evo25: '鲨鱼',
        evo50: '哇尼鳄鱼',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 15,
                max: 200,
            },
            yellow: {
                min: -999,
                max: 95,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 4,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    水滴君: {
        No: 6,
        name: '水滴君',
        element: '水',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'D',
            atk: 'F',
            def: 'E',
            spd: 'E',
            int: 'E',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '钛金君',
        evo50: '咪咪子',
        colors: {
            green: {
                min: 15,
                max: 200,
            },
            blue: {
                min: -999,
                max: 95,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 9,
                max: 95,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    乌贼鲁塔: {
        No: 7,
        name: '乌贼鲁塔',
        element: '水',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'E',
            atk: 'F',
            def: 'E',
            spd: 'E',
            int: 'D',
        },
        skill: '连续攻击α',
        evo25: '塔罗盘',
        evo50: '宿化夫',
        colors: {
            green: {
                min: 8,
                max: 94,
            },
            blue: {
                min: 4,
                max: 94,
            },
            yellow: {
                min: 8,
                max: 94,
            },
            red: {
                min: 8,
                max: 94,
            },
            purple: {
                min: 14,
                max: 200,
            },
            black: {
                min: 4,
                max: 94,
            },
        },
    },
    卡布林贝: {
        No: 8,
        name: '卡布林贝',
        element: '水',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'F',
            atk: 'F',
            def: 'E',
            spd: 'F',
            int: 'E',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '贝贝子',
        evo50: '闪闪贝',
        colors: {
            green: {
                min: 19,
                max: 200,
            },
            blue: {
                min: 1,
                max: 99,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 11,
                max: 99,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    针左卫门: {
        No: 9,
        name: '针左卫门',
        element: '水',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'C',
            atk: 'E',
            def: 'E',
            spd: 'E',
            int: 'E',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '顾家风暴',
        evo50: '家布龙先生',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 28,
                max: 200,
            },
            yellow: {
                min: 2,
                max: 98,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 8,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    奇酷虾: {
        No: 10,
        name: '奇酷虾',
        element: '火',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'E',
            atk: 'D',
            def: 'E',
            spd: 'E',
            int: 'E',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '越前螃蟹',
        evo50: '河童太郎',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 13,
                max: 92,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 22,
                max: 200,
            },
            purple: {
                min: 1,
                max: 92,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哔哩兔: {
        No: 11,
        name: '哔哩兔',
        element: '雷',
        size: '小',
        stats: {
            hp: 'F',
            sp: 'B',
            atk: 'F',
            def: 'E',
            spd: 'E',
            int: 'E',
        },
        skill: '加速之术Ⅰ',
        evo25: '粉祐兔',
        evo50: '潜水兽',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 15,
                max: 96,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 26,
                max: 200,
            },
            purple: {
                min: 1,
                max: 96,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    岩卫门: {
        No: 12,
        name: '岩卫门',
        element: '无',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'E',
            atk: 'E',
            def: 'D',
            spd: 'E',
            int: 'E',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '岩魔石',
        evo50: '磐石花',
        colors: {
            green: {
                min: 4,
                max: 95,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 4,
                max: 95,
            },
            red: {
                min: 2,
                max: 95,
            },
            purple: {
                min: 2,
                max: 95,
            },
            black: {
                min: 25,
                max: 200,
            },
        },
    },
    粉祐兔: {
        No: 13,
        name: '粉祐兔',
        element: '无',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'C',
            atk: 'E',
            def: 'E',
            spd: 'D',
            int: 'D',
        },
        skill: '加速之术Ⅰ',
        evo25: '潜水兽',
        evo50: '顾家风暴',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 14,
                max: 94,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 24,
                max: 200,
            },
            purple: {
                min: 1,
                max: 94,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    杉叶藻姐妹: {
        No: 14,
        name: '杉叶藻姐妹',
        element: '雷',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'F',
            atk: 'D',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅰ',
        evo25: '波哟嘭',
        evo50: '朵拉卜',
        colors: {
            green: {
                min: 2,
                max: 90,
            },
            blue: {
                min: 4,
                max: 90,
            },
            yellow: {
                min: 30,
                max: 200,
            },
            red: {
                min: 4,
                max: 90,
            },
            purple: {
                min: 18,
                max: 90,
            },
            black: {
                min: 4,
                max: 90,
            },
        },
    },
    龟诺: {
        No: 15,
        name: '龟诺',
        element: '水',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'C',
            atk: 'F',
            def: 'D',
            spd: 'E',
            int: 'E',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '指甲龟',
        evo50: '炽热魔人',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 40,
                max: 200,
            },
            yellow: {
                min: 3,
                max: 100,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 12,
                max: 100,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    暴食鸟: {
        No: 16,
        name: '暴食鸟',
        element: '雷',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'C',
            atk: 'E',
            def: 'E',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击Ⅰ',
        evo25: '古瓦斯',
        evo50: '怪鸟沙沙',
        colors: {
            green: {
                min: 18,
                max: 91,
            },
            blue: {
                min: 9,
                max: 91,
            },
            yellow: {
                min: 18,
                max: 91,
            },
            red: {
                min: 18,
                max: 91,
            },
            purple: {
                min: 31,
                max: 200,
            },
            black: {
                min: 9,
                max: 91,
            },
        },
    },
    贝贝子: {
        No: 17,
        name: '贝贝子',
        element: '水',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'D',
            atk: 'E',
            def: 'D',
            spd: 'E',
            int: 'D',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '闪闪贝',
        evo50: '六角恐龙',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 34,
                max: 200,
            },
            yellow: {
                min: 2,
                max: 94,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 10,
                max: 94,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    小火山: {
        No: 18,
        name: '小火山',
        element: '火',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'C',
            atk: 'D',
            def: 'D',
            spd: 'E',
            int: 'E',
        },
        skill: '究极攻击Ⅰ',
        evo25: '热情诺斯',
        evo50: '火雀丽',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 21,
                max: 95,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 35,
                max: 200,
            },
            purple: {
                min: 2,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    钛金君: {
        No: 19,
        name: '钛金君',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'E',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '加速之术Ⅲ',
        evo25: '咪咪子',
        evo50: '大舌Z',
        colors: {
            green: {
                min: 8,
                max: 92,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 8,
                max: 92,
            },
            red: {
                min: 5,
                max: 92,
            },
            purple: {
                min: 5,
                max: 92,
            },
            black: {
                min: 42,
                max: 200,
            },
        },
    },
    马赫蝙蝠: {
        No: 20,
        name: '马赫蝙蝠',
        element: '雷',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'E',
            atk: 'E',
            def: 'E',
            spd: 'D',
            int: 'D',
        },
        skill: '加速之术Ⅰ',
        evo25: '幽浮',
        evo50: '箱子胖',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 9,
                max: 97,
            },
            yellow: {
                min: 4,
                max: 97,
            },
            red: {
                min: 4,
                max: 97,
            },
            purple: {
                min: 47,
                max: 200,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    飘呼呼: {
        No: 21,
        name: '飘呼呼',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'D',
            atk: 'D',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '凉风飘飘',
        evo50: '烤串大王',
        colors: {
            green: {
                min: 4,
                max: 98,
            },
            blue: {
                min: 6,
                max: 98,
            },
            yellow: {
                min: 48,
                max: 200,
            },
            red: {
                min: 6,
                max: 98,
            },
            purple: {
                min: 28,
                max: 98,
            },
            black: {
                min: 6,
                max: 98,
            },
        },
    },
    岩魔石: {
        No: 22,
        name: '岩魔石',
        element: '无',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'D',
            atk: 'E',
            def: 'D',
            spd: 'E',
            int: 'D',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '磐石花',
        evo50: '岩魔人',
        colors: {
            green: {
                min: 9,
                max: 96,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 9,
                max: 96,
            },
            red: {
                min: 6,
                max: 96,
            },
            purple: {
                min: 6,
                max: 96,
            },
            black: {
                min: 46,
                max: 200,
            },
        },
    },
    喵可草: {
        No: 23,
        name: '喵可草',
        element: '木',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'B',
            atk: 'E',
            def: 'C',
            spd: 'E',
            int: 'D',
        },
        skill: '加速之术Ⅰ',
        evo25: '花椰怪',
        evo50: '木桩二郎',
        colors: {
            green: {
                min: 57,
                max: 200,
            },
            blue: {
                min: 4,
                max: 97,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 34,
                max: 97,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    塔罗盘: {
        No: 24,
        name: '塔罗盘',
        element: '水',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'E',
            atk: 'E',
            def: 'E',
            spd: 'E',
            int: 'C',
        },
        skill: '连续攻击Ⅰ',
        evo25: '宿化夫',
        evo50: '铁炮鳗鱼',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 25,
                max: 93,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 43,
                max: 200,
            },
            purple: {
                min: 3,
                max: 93,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    鱼骨怪: {
        No: 25,
        name: '鱼骨怪',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'D',
            def: 'C',
            spd: 'E',
            int: 'D',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '鲑鱼嘭',
        evo50: '丸太君',
        colors: {
            green: {
                min: 9,
                max: 95,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 9,
                max: 95,
            },
            red: {
                min: 6,
                max: 95,
            },
            purple: {
                min: 6,
                max: 95,
            },
            black: {
                min: 45,
                max: 200,
            },
        },
    },
    越前螃蟹: {
        No: 26,
        name: '越前螃蟹',
        element: '水',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'D',
            def: 'D',
            spd: 'E',
            int: 'D',
        },
        skill: '连续攻击Ⅰ',
        evo25: '河童太郎',
        evo50: '呱呱君',
        colors: {
            green: {
                min: 4,
                max: 95,
            },
            blue: {
                min: 6,
                max: 95,
            },
            yellow: {
                min: 45,
                max: 200,
            },
            red: {
                min: 6,
                max: 95,
            },
            purple: {
                min: 27,
                max: 95,
            },
            black: {
                min: 6,
                max: 95,
            },
        },
    },
    鲨鱼: {
        No: 27,
        name: '鲨鱼',
        element: '水',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'F',
            atk: 'C',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅰ',
        evo25: '哇尼鳄鱼',
        evo50: '青龙助仔',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 46,
                max: 200,
            },
            yellow: {
                min: 4,
                max: 96,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 13,
                max: 96,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    花椰怪: {
        No: 28,
        name: '花椰怪',
        element: '木',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'F',
            atk: 'F',
            def: 'E',
            spd: 'E',
            int: 'C',
        },
        skill: '究极攻击Ⅰ',
        evo25: '木桩二郎',
        evo50: '蘑菇原人',
        colors: {
            green: {
                min: 58,
                max: 200,
            },
            blue: {
                min: 4,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 34,
                max: 98,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    潜水兽: {
        No: 29,
        name: '潜水兽',
        element: '木',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'E',
            atk: 'F',
            def: 'E',
            spd: 'E',
            int: 'C',
        },
        skill: '连续攻击α',
        evo25: '顾家风暴',
        evo50: '家布龙先生',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 30,
                max: 100,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 50,
                max: 200,
            },
            purple: {
                min: 4,
                max: 100,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    福克林王: {
        No: 30,
        name: '福克林王',
        element: '雷',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'D',
            atk: 'C',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: '加速之术Ⅲ',
        evo25: '波哟嘭',
        evo50: '朵拉卜',
        colors: {
            green: {
                min: 4,
                max: 95,
            },
            blue: {
                min: 7,
                max: 95,
            },
            yellow: {
                min: 55,
                max: 200,
            },
            red: {
                min: 7,
                max: 95,
            },
            purple: {
                min: 33,
                max: 95,
            },
            black: {
                min: 7,
                max: 95,
            },
        },
    },
    闪闪贝: {
        No: 31,
        name: '闪闪贝',
        element: '水',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'D',
            def: 'C',
            spd: 'E',
            int: 'D',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '六角恐龙',
        evo50: '炽热魔人',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 40,
                max: 200,
            },
            yellow: {
                min: 3,
                max: 90,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 12,
                max: 90,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    皮皮孩: {
        No: 32,
        name: '皮皮孩',
        element: '木',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'D',
            def: 'C',
            spd: 'E',
            int: 'D',
        },
        skill: 'HP回复术Ⅱ',
        evo25: '骨子海贼',
        evo50: '骨子船长',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 9,
                max: 98,
            },
            yellow: {
                min: 4,
                max: 98,
            },
            red: {
                min: 4,
                max: 98,
            },
            purple: {
                min: 48,
                max: 200,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    背背多: {
        No: 33,
        name: '背背多',
        element: '木',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'B',
            atk: 'C',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击α',
        evo25: '草泥马骑士',
        evo50: '棉花糖大王',
        colors: {
            green: {
                min: 11,
                max: 96,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 11,
                max: 96,
            },
            red: {
                min: 7,
                max: 96,
            },
            purple: {
                min: 7,
                max: 96,
            },
            black: {
                min: 56,
                max: 200,
            },
        },
    },
    宿化夫: {
        No: 34,
        name: '宿化夫',
        element: '水',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'D',
            atk: 'D',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '铁炮鳗鱼',
        evo50: '牛楠楠',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 31,
                max: 92,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 52,
                max: 200,
            },
            purple: {
                min: 4,
                max: 92,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    鲑鱼嘭: {
        No: 35,
        name: '鲑鱼嘭',
        element: '水',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'F',
            atk: 'E',
            def: 'C',
            spd: 'D',
            int: 'C',
        },
        skill: '究极攻击Ⅰ',
        evo25: '丸太君',
        evo50: '怪鸟沙沙',
        colors: {
            green: {
                min: 11,
                max: 98,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 11,
                max: 98,
            },
            red: {
                min: 7,
                max: 98,
            },
            purple: {
                min: 7,
                max: 98,
            },
            black: {
                min: 58,
                max: 200,
            },
        },
    },
    古瓦斯: {
        No: 36,
        name: '古瓦斯',
        element: '雷',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'D',
            def: 'C',
            spd: 'E',
            int: 'D',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '怪鸟沙沙',
        evo50: '暴食鸟改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 50,
                max: 200,
            },
            yellow: {
                min: 4,
                max: 90,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 15,
                max: 90,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哈皮狮: {
        No: 37,
        name: '哈皮狮',
        element: '雷',
        size: '小',
        stats: {
            hp: 'E',
            sp: 'C',
            atk: 'D',
            def: 'D',
            spd: 'C',
            int: 'D',
        },
        skill: '加速之术Ⅱ',
        evo25: '哗哩可',
        evo50: '风拳龙',
        colors: {
            green: {
                min: 4,
                max: 98,
            },
            blue: {
                min: 7,
                max: 98,
            },
            yellow: {
                min: 58,
                max: 200,
            },
            red: {
                min: 7,
                max: 98,
            },
            purple: {
                min: 34,
                max: 98,
            },
            black: {
                min: 7,
                max: 98,
            },
        },
    },
    黑露露: {
        No: 38,
        name: '黑露露',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'F',
            atk: 'E',
            def: 'E',
            spd: 'E',
            int: 'C',
        },
        skill: '加速之术Ⅱ',
        evo25: '发仙人',
        evo50: '棉花糖大王',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 11,
                max: 97,
            },
            yellow: {
                min: 4,
                max: 97,
            },
            red: {
                min: 4,
                max: 97,
            },
            purple: {
                min: 57,
                max: 200,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    顾家风暴: {
        No: 39,
        name: '顾家风暴',
        element: '无',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'D',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅰ',
        evo25: '家布龙先生',
        evo50: '风拳龙',
        colors: {
            green: {
                min: 58,
                max: 200,
            },
            blue: {
                min: 4,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 34,
                max: 98,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    骨子剑士: {
        No: 40,
        name: '骨子剑士',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击Ⅰ',
        evo25: '骨子海贼',
        evo50: '骨子船长',
        colors: {
            green: {
                min: 31,
                max: 93,
            },
            blue: {
                min: 15,
                max: 93,
            },
            yellow: {
                min: 31,
                max: 93,
            },
            red: {
                min: 31,
                max: 93,
            },
            purple: {
                min: 53,
                max: 200,
            },
            black: {
                min: 15,
                max: 93,
            },
        },
    },
    比布汽笛: {
        No: 41,
        name: '比布汽笛',
        element: '火',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'F',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅱ',
        evo25: '红龙小助',
        evo50: '火焱龙',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 39,
                max: 95,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 65,
                max: 200,
            },
            purple: {
                min: 6,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    河童太郎: {
        No: 42,
        name: '河童太郎',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'C',
            def: 'D',
            spd: 'D',
            int: 'C',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '呱呱君',
        evo50: '杉叶藻姐妹改',
        colors: {
            green: {
                min: 67,
                max: 200,
            },
            blue: {
                min: 6,
                max: 97,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 40,
                max: 97,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    骨子海贼: {
        No: 43,
        name: '骨子海贼',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击Ⅰ',
        evo25: '骨子船长',
        evo50: '欧巴太郎',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 13,
                max: 95,
            },
            yellow: {
                min: 6,
                max: 95,
            },
            red: {
                min: 6,
                max: 95,
            },
            purple: {
                min: 65,
                max: 200,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    热情诺斯: {
        No: 44,
        name: '热情诺斯',
        element: '火',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅰ',
        evo25: '火雀丽',
        evo50: '多驯犬',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 40,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 68,
                max: 200,
            },
            purple: {
                min: 6,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哇尼鳄鱼: {
        No: 45,
        name: '哇尼鳄鱼',
        element: '暗',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'C',
            def: 'D',
            spd: 'D',
            int: 'D',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '青龙助仔',
        evo50: '朵拉卜',
        colors: {
            green: {
                min: 6,
                max: 97,
            },
            blue: {
                min: 9,
                max: 97,
            },
            yellow: {
                min: 67,
                max: 200,
            },
            red: {
                min: 9,
                max: 97,
            },
            purple: {
                min: 40,
                max: 97,
            },
            black: {
                min: 9,
                max: 97,
            },
        },
    },
    波哟嘭: {
        No: 46,
        name: '波哟嘭',
        element: '无',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'C',
        },
        skill: '加速之术Ⅱ',
        evo25: '朵拉卜',
        evo50: '粉祐兔改',
        colors: {
            green: {
                min: 63,
                max: 200,
            },
            blue: {
                min: 5,
                max: 93,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 37,
                max: 93,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    铁炮鳗鱼: {
        No: 47,
        name: '铁炮鳗鱼',
        element: '雷',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'D',
            atk: 'C',
            def: 'D',
            spd: 'D',
            int: 'C',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '牛楠楠',
        evo50: '加布龙头鱼改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 77,
                max: 200,
            },
            yellow: {
                min: 7,
                max: 97,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 23,
                max: 97,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    指甲龟: {
        No: 48,
        name: '指甲龟',
        element: '火',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'D',
            atk: 'D',
            def: 'C',
            spd: 'D',
            int: 'C',
        },
        skill: 'HP回复术Ⅱ',
        evo25: '炽热魔人',
        evo50: '针左卫门改',
        colors: {
            green: {
                min: 16,
                max: 100,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 16,
                max: 100,
            },
            red: {
                min: 11,
                max: 100,
            },
            purple: {
                min: 11,
                max: 100,
            },
            black: {
                min: 80,
                max: 200,
            },
        },
    },
    木桩二郎: {
        No: 49,
        name: '木桩二郎',
        element: '木',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '蘑菇原人',
        evo50: '啾啾树',
        colors: {
            green: {
                min: 78,
                max: 200,
            },
            blue: {
                min: 7,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 46,
                max: 98,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    火雀丽: {
        No: 50,
        name: '火雀丽',
        element: '火',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'B',
            atk: 'E',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '究极攻击Ⅱ',
        evo25: '多驯犬',
        evo50: '火焱龙',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 46,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 78,
                max: 200,
            },
            purple: {
                min: 7,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    幽浮: {
        No: 51,
        name: '幽浮',
        element: '雷',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'F',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '箱子胖',
        evo50: '歪罗王君',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 73,
                max: 200,
            },
            yellow: {
                min: 6,
                max: 93,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 21,
                max: 93,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    咪咪子: {
        No: 52,
        name: '咪咪子',
        element: '暗',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'D',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '连续攻击Ⅱ',
        evo25: '大舌Z',
        evo50: '小火山改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 15,
                max: 94,
            },
            yellow: {
                min: 7,
                max: 94,
            },
            red: {
                min: 7,
                max: 94,
            },
            purple: {
                min: 74,
                max: 200,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    蘑菇原人: {
        No: 53,
        name: '蘑菇原人',
        element: '木',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击Ⅰ',
        evo25: '啾啾树',
        evo50: null,
        colors: {
            green: {
                min: 78,
                max: 200,
            },
            blue: {
                min: 7,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 46,
                max: 98,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    绷带助人: {
        No: 54,
        name: '绷带助人',
        element: '暗',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '烤串大王',
        evo50: '卡布林贝改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 15,
                max: 96,
            },
            yellow: {
                min: 7,
                max: 96,
            },
            red: {
                min: 7,
                max: 96,
            },
            purple: {
                min: 76,
                max: 200,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    箱子胖: {
        No: 55,
        name: '箱子胖',
        element: '无',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'D',
            def: 'C',
            spd: 'D',
            int: 'C',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '歪罗王君',
        evo50: '淡黄水母改',
        colors: {
            green: {
                min: 46,
                max: 98,
            },
            blue: {
                min: 23,
                max: 98,
            },
            yellow: {
                min: 46,
                max: 98,
            },
            red: {
                min: 46,
                max: 98,
            },
            purple: {
                min: 78,
                max: 200,
            },
            black: {
                min: 23,
                max: 98,
            },
        },
    },
    草泥马骑士: {
        No: 56,
        name: '草泥马骑士',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '连续攻击Ⅰ',
        evo25: '棉花糖大王',
        evo50: '梅塔可改',
        colors: {
            green: {
                min: 21,
                max: 90,
            },
            blue: {
                min: 70,
                max: 200,
            },
            yellow: {
                min: 21,
                max: 90,
            },
            red: {
                min: 42,
                max: 90,
            },
            purple: {
                min: 42,
                max: 90,
            },
            black: {
                min: 14,
                max: 90,
            },
        },
    },
    恐怖螺丝: {
        No: 57,
        name: '恐怖螺丝',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击Ⅱ',
        evo25: '大佬君',
        evo50: '塔罗盘改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 52,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 88,
                max: 200,
            },
            purple: {
                min: 8,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    凉风飘飘: {
        No: 58,
        name: '凉风飘飘',
        element: '暗',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '烤串大王',
        evo50: '卡布林贝改',
        colors: {
            green: {
                min: 8,
                max: 98,
            },
            blue: {
                min: 12,
                max: 98,
            },
            yellow: {
                min: 88,
                max: 200,
            },
            red: {
                min: 12,
                max: 98,
            },
            purple: {
                min: 52,
                max: 98,
            },
            black: {
                min: 12,
                max: 98,
            },
        },
    },
    青龙助仔: {
        No: 59,
        name: '青龙助仔',
        element: '火',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅱ',
        evo25: '朵拉卜',
        evo50: '粉祐兔改',
        colors: {
            green: {
                min: 81,
                max: 200,
            },
            blue: {
                min: 7,
                max: 91,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 48,
                max: 91,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    啾啾树: {
        No: 60,
        name: '啾啾树',
        element: '木',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'F',
            atk: 'D',
            def: 'C',
            spd: 'D',
            int: 'C',
        },
        skill: 'HP回复术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 85,
                max: 200,
            },
            blue: {
                min: 7,
                max: 95,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 51,
                max: 95,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    发仙人: {
        No: 61,
        name: '发仙人',
        element: '雷',
        size: '中',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'D',
            def: 'D',
            spd: 'C',
            int: 'C',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '棉花糖大王',
        evo50: '梅塔可改',
        colors: {
            green: {
                min: 8,
                max: 98,
            },
            blue: {
                min: 12,
                max: 98,
            },
            yellow: {
                min: 88,
                max: 200,
            },
            red: {
                min: 12,
                max: 98,
            },
            purple: {
                min: 52,
                max: 98,
            },
            black: {
                min: 12,
                max: 98,
            },
        },
    },
    家布龙先生: {
        No: 62,
        name: '家布龙先生',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'F',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '连续攻击Ⅱ',
        evo25: '风拳龙',
        evo50: '波波洛利改',
        colors: {
            green: {
                min: 18,
                max: 98,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 18,
                max: 98,
            },
            red: {
                min: 12,
                max: 98,
            },
            purple: {
                min: 12,
                max: 98,
            },
            black: {
                min: 88,
                max: 200,
            },
        },
    },
    六角恐龙: {
        No: 63,
        name: '六角恐龙',
        element: '雷',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '究极攻击Ⅱ',
        evo25: '炽热魔人',
        evo50: '针左卫门改',
        colors: {
            green: {
                min: 52,
                max: 98,
            },
            blue: {
                min: 26,
                max: 98,
            },
            yellow: {
                min: 52,
                max: 98,
            },
            red: {
                min: 52,
                max: 98,
            },
            purple: {
                min: 88,
                max: 200,
            },
            black: {
                min: 26,
                max: 98,
            },
        },
    },
    骨子船长: {
        No: 64,
        name: '骨子船长',
        element: '暗',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'B',
            atk: 'B',
            def: 'C',
            spd: 'C',
            int: 'D',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '欧巴太郎',
        evo50: '岩卫门改',
        colors: {
            green: {
                min: 19,
                max: 194,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 19,
                max: 194,
            },
            red: {
                min: 13,
                max: 194,
            },
            purple: {
                min: 13,
                max: 194,
            },
            black: {
                min: 94,
                max: 300,
            },
        },
    },
    多驯犬: {
        No: 65,
        name: '多驯犬',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'D',
            atk: 'B',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '火焱龙',
        evo50: '奇酷虾改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 20,
                max: 198,
            },
            yellow: {
                min: 9,
                max: 98,
            },
            red: {
                min: 9,
                max: 98,
            },
            purple: {
                min: 98,
                max: 300,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    红龙小助: {
        No: 66,
        name: '红龙小助',
        element: '火',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'B',
            def: 'C',
            spd: 'C',
            int: 'D',
        },
        skill: '究极攻击Ⅱ',
        evo25: '火焱龙',
        evo50: '奇酷虾改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 57,
                max: 195,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 95,
                max: 300,
            },
            purple: {
                min: 9,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哗哩可: {
        No: 67,
        name: '哗哩可',
        element: '火',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'F',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '究极攻击Ⅱ',
        evo25: '风拳龙',
        evo50: '波波洛利改',
        colors: {
            green: {
                min: 9,
                max: 98,
            },
            blue: {
                min: 14,
                max: 198,
            },
            yellow: {
                min: 98,
                max: 300,
            },
            red: {
                min: 14,
                max: 198,
            },
            purple: {
                min: 58,
                max: 198,
            },
            black: {
                min: 14,
                max: 198,
            },
        },
    },
    磐石花: {
        No: 68,
        name: '磐石花',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'F',
            atk: 'C',
            def: 'C',
            spd: 'D',
            int: 'D',
        },
        skill: '加速之术Ⅲ',
        evo25: '岩魔人',
        evo50: '欧巴太郎',
        colors: {
            green: {
                min: 99,
                max: 300,
            },
            blue: {
                min: 9,
                max: 99,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 59,
                max: 199,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    丸太君: {
        No: 69,
        name: '丸太君',
        element: '暗',
        size: '小',
        stats: {
            hp: 'D',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'C',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '怪鸟沙沙',
        evo50: '暴食鸟改',
        colors: {
            green: {
                min: 9,
                max: 98,
            },
            blue: {
                min: 14,
                max: 198,
            },
            yellow: {
                min: 98,
                max: 300,
            },
            red: {
                min: 14,
                max: 198,
            },
            purple: {
                min: 58,
                max: 198,
            },
            black: {
                min: 14,
                max: 198,
            },
        },
    },
    岩魔人: {
        No: 70,
        name: '岩魔人',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '连续攻击Ⅱ',
        evo25: '欧巴太郎',
        evo50: '岩卫门改',
        colors: {
            green: {
                min: 21,
                max: 195,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 21,
                max: 195,
            },
            red: {
                min: 14,
                max: 195,
            },
            purple: {
                min: 14,
                max: 195,
            },
            black: {
                min: 105,
                max: 300,
            },
        },
    },
    炽热魔人: {
        No: 71,
        name: '炽热魔人',
        element: '火',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'B',
            def: 'C',
            spd: 'C',
            int: 'D',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '针左卫门改',
        evo50: '顾家风暴改',
        colors: {
            green: {
                min: 64,
                max: 197,
            },
            blue: {
                min: 32,
                max: 197,
            },
            yellow: {
                min: 64,
                max: 197,
            },
            red: {
                min: 64,
                max: 197,
            },
            purple: {
                min: 107,
                max: 300,
            },
            black: {
                min: 32,
                max: 197,
            },
        },
    },
    棉花糖大王: {
        No: 72,
        name: '棉花糖大王',
        element: '无',
        size: '中',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'C',
        },
        skill: '连续攻击Ⅱ',
        evo25: '梅塔可改',
        evo50: '哔哩兔改',
        colors: {
            green: {
                min: 35,
                max: 197,
            },
            blue: {
                min: 117,
                max: 300,
            },
            yellow: {
                min: 35,
                max: 197,
            },
            red: {
                min: 70,
                max: 197,
            },
            purple: {
                min: 70,
                max: 197,
            },
            black: {
                min: 24,
                max: 197,
            },
        },
    },
    牛楠楠: {
        No: 73,
        name: '牛楠楠',
        element: '水',
        size: '大',
        stats: {
            hp: 'B',
            sp: 'C',
            atk: 'C',
            def: 'B',
            spd: 'D',
            int: 'C',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '加布龙头鱼改',
        evo50: '鲨鱼改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 127,
                max: 300,
            },
            yellow: {
                min: 12,
                max: 97,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 38,
                max: 197,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    大佬君: {
        No: 74,
        name: '大佬君',
        element: '水',
        size: '大',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '究极攻击Ⅲ',
        evo25: '塔罗盘改',
        evo50: '宿化夫改',
        colors: {
            green: {
                min: 25,
                max: 195,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 25,
                max: 195,
            },
            red: {
                min: 17,
                max: 195,
            },
            purple: {
                min: 17,
                max: 195,
            },
            black: {
                min: 125,
                max: 300,
            },
        },
    },
    呱呱君: {
        No: 75,
        name: '呱呱君',
        element: '木',
        size: '大',
        stats: {
            hp: 'C',
            sp: 'D',
            atk: 'D',
            def: 'D',
            spd: 'D',
            int: 'B',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '杉叶藻姐妹改',
        evo50: '波哟嘭改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 27,
                max: 200,
            },
            yellow: {
                min: 12,
                max: 100,
            },
            red: {
                min: 12,
                max: 100,
            },
            purple: {
                min: 130,
                max: 300,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    怪鸟沙沙: {
        No: 76,
        name: '怪鸟沙沙',
        element: '雷',
        size: '大',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'B',
            def: 'C',
            spd: 'A',
            int: 'B',
        },
        skill: '加速之术Ⅲ',
        evo25: '暴食鸟改',
        evo50: '古瓦斯改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 173,
                max: 300,
            },
            yellow: {
                min: 16,
                max: 93,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 51,
                max: 193,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    朵拉卜: {
        No: 77,
        name: '朵拉卜',
        element: '火',
        size: '大',
        stats: {
            hp: 'B',
            sp: 'E',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '粉祐兔改',
        evo50: '潜水兽改',
        colors: {
            green: {
                min: 175,
                max: 300,
            },
            blue: {
                min: 17,
                max: 95,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 105,
                max: 195,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    风拳龙: {
        No: 78,
        name: '风拳龙',
        element: '木',
        size: '大',
        stats: {
            hp: 'B',
            sp: 'C',
            atk: 'B',
            def: 'A',
            spd: 'C',
            int: 'B',
        },
        skill: '究极攻击Ⅱ',
        evo25: '波波洛利改',
        evo50: '水滴君改',
        colors: {
            green: {
                min: 17,
                max: 195,
            },
            blue: {
                min: 25,
                max: 195,
            },
            yellow: {
                min: 175,
                max: 300,
            },
            red: {
                min: 25,
                max: 195,
            },
            purple: {
                min: 105,
                max: 195,
            },
            black: {
                min: 25,
                max: 195,
            },
        },
    },
    歪罗王君: {
        No: 79,
        name: '歪罗王君',
        element: '雷',
        size: '大',
        stats: {
            hp: 'B',
            sp: 'A',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '淡黄水母改',
        evo50: '杉叶藻姐妹改',
        colors: {
            green: {
                min: 57,
                max: 200,
            },
            blue: {
                min: 190,
                max: 300,
            },
            yellow: {
                min: 57,
                max: 200,
            },
            red: {
                min: 114,
                max: 200,
            },
            purple: {
                min: 114,
                max: 200,
            },
            black: {
                min: 39,
                max: 200,
            },
        },
    },
    烤串大王: {
        No: 80,
        name: '烤串大王',
        element: '暗',
        size: '大',
        stats: {
            hp: 'B',
            sp: 'C',
            atk: 'B',
            def: 'B',
            spd: 'A',
            int: 'B',
        },
        skill: '究极攻击Ⅱ',
        evo25: '卡布林贝改',
        evo50: '贝贝子改',
        colors: {
            green: {
                min: 40,
                max: 294,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 40,
                max: 294,
            },
            red: {
                min: 28,
                max: 294,
            },
            purple: {
                min: 28,
                max: 294,
            },
            black: {
                min: 194,
                max: 400,
            },
        },
    },
    欧巴太郎: {
        No: 81,
        name: '欧巴太郎',
        element: '雷',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'A',
            def: 'B',
            spd: 'A',
            int: 'A',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '岩卫门改',
        evo50: '岩魔石改',
        colors: {
            green: {
                min: 146,
                max: 294,
            },
            blue: {
                min: 73,
                max: 294,
            },
            yellow: {
                min: 146,
                max: 294,
            },
            red: {
                min: 146,
                max: 294,
            },
            purple: {
                min: 244,
                max: 400,
            },
            black: {
                min: 73,
                max: 294,
            },
        },
    },
    火焱龙: {
        No: 82,
        name: '火焱龙',
        element: '火',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '究极攻击Ⅲ',
        evo25: '奇酷虾改',
        evo50: '越前螃蟹改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 166,
                max: 297,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 277,
                max: 400,
            },
            purple: {
                min: 28,
                max: 97,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    大舌Z: {
        No: 83,
        name: '大舌Z',
        element: '暗',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: '小火山改',
        evo50: '热情诺斯改',
        colors: {
            green: {
                min: 89,
                max: 388,
            },
            blue: {
                min: 298,
                max: 500,
            },
            yellow: {
                min: 89,
                max: 388,
            },
            red: {
                min: 178,
                max: 388,
            },
            purple: {
                min: 178,
                max: 388,
            },
            black: {
                min: 62,
                max: 388,
            },
        },
    },
    白龙瞄: {
        No: 84,
        name: '白龙瞄',
        element: '暗',
        size: '中',
        stats: {
            hp: 'B',
            sp: 'S',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 37,
                max: 197,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 37,
                max: 197,
            },
            red: {
                min: 25,
                max: 197,
            },
            purple: {
                min: 25,
                max: 197,
            },
            black: {
                min: 177,
                max: 300,
            },
        },
    },
    瓜阵哗: {
        No: 85,
        name: '瓜阵哗',
        element: '雷',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 18,
                max: 197,
            },
            blue: {
                min: 27,
                max: 197,
            },
            yellow: {
                min: 187,
                max: 300,
            },
            red: {
                min: 27,
                max: 197,
            },
            purple: {
                min: 112,
                max: 197,
            },
            black: {
                min: 27,
                max: 197,
            },
        },
    },
    青涩水龙: {
        No: 86,
        name: '青涩水龙',
        element: '水',
        size: '中',
        stats: {
            hp: 'B',
            sp: 'S',
            atk: 'B',
            def: 'B',
            spd: 'A',
            int: 'A',
        },
        skill: '连续攻击Ⅱ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 207,
                max: 400,
            },
            yellow: {
                min: 21,
                max: 97,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 62,
                max: 297,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    波波洛利改: {
        No: 87,
        name: '波波洛利改',
        element: '无',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'B',
        },
        skill: '无',
        evo25: '水滴君改',
        evo50: '钛金君改',
        colors: {
            green: {
                min: 38,
                max: 197,
            },
            blue: {
                min: 127,
                max: 300,
            },
            yellow: {
                min: 38,
                max: 197,
            },
            red: {
                min: 76,
                max: 197,
            },
            purple: {
                min: 76,
                max: 197,
            },
            black: {
                min: 26,
                max: 197,
            },
        },
    },
    梅塔可改: {
        No: 88,
        name: '梅塔可改',
        element: '无',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'D',
            def: 'C',
            spd: 'C',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: '哔哩兔改',
        evo50: '粉祐兔改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 125,
                max: 300,
            },
            yellow: {
                min: 11,
                max: 95,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 37,
                max: 195,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    小海蛇改: {
        No: 89,
        name: '小海蛇改',
        element: '无',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'D',
            atk: 'B',
            def: 'B',
            spd: 'C',
            int: 'C',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '鲑鱼嘭改',
        evo50: '丸太君改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 138,
                max: 300,
            },
            yellow: {
                min: 13,
                max: 98,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 41,
                max: 198,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    淡黄水母改: {
        No: 90,
        name: '淡黄水母改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'F',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: '杉叶藻姐妹改',
        evo50: '波哟嘭改',
        colors: {
            green: {
                min: 12,
                max: 90,
            },
            blue: {
                min: 18,
                max: 190,
            },
            yellow: {
                min: 130,
                max: 300,
            },
            red: {
                min: 18,
                max: 190,
            },
            purple: {
                min: 78,
                max: 190,
            },
            black: {
                min: 18,
                max: 190,
            },
        },
    },
    加布龙头鱼改: {
        No: 91,
        name: '加布龙头鱼改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'E',
            atk: 'B',
            def: 'B',
            spd: 'C',
            int: 'C',
        },
        skill: '连续攻击α',
        evo25: '鲨鱼改',
        evo50: '哇尼鳄鱼改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 135,
                max: 300,
            },
            yellow: {
                min: 13,
                max: 95,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 40,
                max: 195,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    水滴君改: {
        No: 92,
        name: '水滴君改',
        element: '水',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'C',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '钛金君改',
        evo50: '咪咪子改',
        colors: {
            green: {
                min: 145,
                max: 300,
            },
            blue: {
                min: 14,
                max: 95,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 87,
                max: 195,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    乌贼鲁塔改: {
        No: 93,
        name: '乌贼鲁塔改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'C',
            int: 'A',
        },
        skill: '连续攻击α',
        evo25: '塔罗盘改',
        evo50: '宿化夫改',
        colors: {
            green: {
                min: 86,
                max: 194,
            },
            blue: {
                min: 43,
                max: 194,
            },
            yellow: {
                min: 86,
                max: 194,
            },
            red: {
                min: 86,
                max: 194,
            },
            purple: {
                min: 144,
                max: 300,
            },
            black: {
                min: 43,
                max: 194,
            },
        },
    },
    卡布林贝改: {
        No: 94,
        name: '卡布林贝改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'E',
            atk: 'C',
            def: 'B',
            spd: 'C',
            int: 'B',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '贝贝子改',
        evo50: '闪闪贝改',
        colors: {
            green: {
                min: 149,
                max: 300,
            },
            blue: {
                min: 14,
                max: 99,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 89,
                max: 199,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    针左卫门改: {
        No: 95,
        name: '针左卫门改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'A',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '顾家风暴改',
        evo50: '家布龙先生改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 158,
                max: 300,
            },
            yellow: {
                min: 15,
                max: 98,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 47,
                max: 198,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    奇酷虾改: {
        No: 96,
        name: '奇酷虾改',
        element: '火',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'D',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'C',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '越前螃蟹改',
        evo50: '河童太郎改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 91,
                max: 192,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 152,
                max: 300,
            },
            purple: {
                min: 14,
                max: 92,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哔哩兔改: {
        No: 97,
        name: '哔哩兔改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'A',
            atk: 'B',
            def: 'C',
            spd: 'A',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: '粉祐兔改',
        evo50: '潜水兽改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 99,
                max: 196,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 165,
                max: 300,
            },
            purple: {
                min: 16,
                max: 96,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    岩卫门改: {
        No: 98,
        name: '岩卫门改',
        element: '无',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'D',
            atk: 'B',
            def: 'A',
            spd: 'C',
            int: 'B',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '岩魔石改',
        evo50: '磐石花改',
        colors: {
            green: {
                min: 34,
                max: 195,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 34,
                max: 195,
            },
            red: {
                min: 23,
                max: 195,
            },
            purple: {
                min: 23,
                max: 195,
            },
            black: {
                min: 165,
                max: 300,
            },
        },
    },
    粉祐兔改: {
        No: 99,
        name: '粉祐兔改',
        element: '无',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'A',
            atk: 'B',
            def: 'B',
            spd: 'A',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: '潜水兽改',
        evo50: '顾家风暴改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 98,
                max: 196,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 164,
                max: 300,
            },
            purple: {
                min: 16,
                max: 94,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    杉叶藻姐妹改: {
        No: 100,
        name: '杉叶藻姐妹改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'F',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '究极攻击Ⅰ',
        evo25: '波哟嘭改',
        evo50: '朵拉卜改',
        colors: {
            green: {
                min: 16,
                max: 190,
            },
            blue: {
                min: 24,
                max: 190,
            },
            yellow: {
                min: 170,
                max: 300,
            },
            red: {
                min: 24,
                max: 190,
            },
            purple: {
                min: 102,
                max: 190,
            },
            black: {
                min: 24,
                max: 190,
            },
        },
    },
    龟诺改: {
        No: 101,
        name: '龟诺改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'B',
            atk: 'B',
            def: 'A',
            spd: 'C',
            int: 'B',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '指甲龟改',
        evo50: '炽热魔人改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 178,
                max: 300,
            },
            yellow: {
                min: 17,
                max: 98,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 53,
                max: 198,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    暴食鸟改: {
        No: 102,
        name: '暴食鸟改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'A',
            atk: 'B',
            def: 'B',
            spd: 'A',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: '古瓦斯改',
        evo50: '怪鸟沙沙改',
        colors: {
            green: {
                min: 102,
                max: 191,
            },
            blue: {
                min: 51,
                max: 191,
            },
            yellow: {
                min: 102,
                max: 191,
            },
            red: {
                min: 102,
                max: 191,
            },
            purple: {
                min: 171,
                max: 300,
            },
            black: {
                min: 51,
                max: 191,
            },
        },
    },
    贝贝子改: {
        No: 103,
        name: '贝贝子改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'C',
            atk: 'B',
            def: 'A',
            spd: 'C',
            int: 'B',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '闪闪贝改',
        evo50: '六角恐龙改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 184,
                max: 300,
            },
            yellow: {
                min: 18,
                max: 94,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 55,
                max: 194,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    小火山改: {
        No: 104,
        name: '小火山改',
        element: '火',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'A',
            atk: 'A',
            def: 'B',
            spd: 'B',
            int: 'C',
        },
        skill: '究极攻击Ⅰ',
        evo25: '热情诺斯改',
        evo50: '火雀丽改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 111,
                max: 195,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 185,
                max: 300,
            },
            purple: {
                min: 18,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    钛金君改: {
        No: 105,
        name: '钛金君改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'E',
            atk: 'C',
            def: 'A',
            spd: 'B',
            int: 'A',
        },
        skill: '加速之术Ⅲ',
        evo25: '咪咪子改',
        evo50: '大舌Z改',
        colors: {
            green: {
                min: 37,
                max: 192,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 37,
                max: 192,
            },
            red: {
                min: 25,
                max: 192,
            },
            purple: {
                min: 25,
                max: 192,
            },
            black: {
                min: 182,
                max: 300,
            },
        },
    },
    马赫蝙蝠改: {
        No: 106,
        name: '马赫蝙蝠改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'D',
            atk: 'B',
            def: 'B',
            spd: 'A',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: '幽浮改',
        evo50: '箱子胖改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 41,
                max: 299,
            },
            yellow: {
                min: 19,
                max: 99,
            },
            red: {
                min: 19,
                max: 99,
            },
            purple: {
                min: 199,
                max: 400,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    飘呼呼改: {
        No: 107,
        name: '飘呼呼改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'C',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '凉风飘飘改',
        evo50: '烤串大王改',
        colors: {
            green: {
                min: 19,
                max: 198,
            },
            blue: {
                min: 28,
                max: 298,
            },
            yellow: {
                min: 198,
                max: 400,
            },
            red: {
                min: 28,
                max: 298,
            },
            purple: {
                min: 118,
                max: 298,
            },
            black: {
                min: 28,
                max: 298,
            },
        },
    },
    岩魔石改: {
        No: 108,
        name: '岩魔石改',
        element: '无',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'B',
            def: 'A',
            spd: 'C',
            int: 'B',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '磐石花改',
        evo50: '岩魔人改',
        colors: {
            green: {
                min: 40,
                max: 296,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 40,
                max: 296,
            },
            red: {
                min: 28,
                max: 296,
            },
            purple: {
                min: 28,
                max: 296,
            },
            black: {
                min: 196,
                max: 400,
            },
        },
    },
    喵可草改: {
        No: 109,
        name: '喵可草改',
        element: '木',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'B',
            def: 'A',
            spd: 'C',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: '花椰怪改',
        evo50: '木桩二郎改',
        colors: {
            green: {
                min: 207,
                max: 400,
            },
            blue: {
                min: 21,
                max: 97,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 124,
                max: 297,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    塔罗盘改: {
        No: 110,
        name: '塔罗盘改',
        element: '水',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'A',
        },
        skill: '连续攻击Ⅰ',
        evo25: '宿化夫改',
        evo50: '铁炮鳗鱼改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 121,
                max: 293,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 203,
                max: 400,
            },
            purple: {
                min: 20,
                max: 93,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    鱼骨怪改: {
        No: 111,
        name: '鱼骨怪改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '鲑鱼嘭改',
        evo50: '丸太君改',
        colors: {
            green: {
                min: 42,
                max: 295,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 42,
                max: 295,
            },
            red: {
                min: 29,
                max: 295,
            },
            purple: {
                min: 29,
                max: 295,
            },
            black: {
                min: 205,
                max: 400,
            },
        },
    },
    越前螃蟹改: {
        No: 112,
        name: '越前螃蟹改',
        element: '水',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'A',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: '河童太郎改',
        evo50: '呱呱君改',
        colors: {
            green: {
                min: 21,
                max: 195,
            },
            blue: {
                min: 30,
                max: 295,
            },
            yellow: {
                min: 215,
                max: 400,
            },
            red: {
                min: 30,
                max: 295,
            },
            purple: {
                min: 129,
                max: 295,
            },
            black: {
                min: 30,
                max: 295,
            },
        },
    },
    鲨鱼改: {
        No: 113,
        name: '鲨鱼改',
        element: '水',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'A',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '究极攻击Ⅰ',
        evo25: '哇尼鳄鱼改',
        evo50: '青龙助仔改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 216,
                max: 400,
            },
            yellow: {
                min: 21,
                max: 96,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 64,
                max: 296,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    花椰怪改: {
        No: 114,
        name: '花椰怪改',
        element: '木',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'E',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'A',
        },
        skill: '究极攻击Ⅰ',
        evo25: '木桩二郎改',
        evo50: '蘑菇原人改',
        colors: {
            green: {
                min: 218,
                max: 400,
            },
            blue: {
                min: 21,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 130,
                max: 298,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    潜水兽改: {
        No: 115,
        name: '潜水兽改',
        element: '木',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'D',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'A',
        },
        skill: '连续攻击α',
        evo25: '顾家风暴改',
        evo50: '家布龙先生改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 136,
                max: 298,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 228,
                max: 400,
            },
            purple: {
                min: 22,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    福克林王改: {
        No: 116,
        name: '福克林王改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'A',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '加速之术Ⅲ',
        evo25: '波哟嘭改',
        evo50: '朵拉卜改',
        colors: {
            green: {
                min: 22,
                max: 195,
            },
            blue: {
                min: 32,
                max: 295,
            },
            yellow: {
                min: 255,
                max: 400,
            },
            red: {
                min: 32,
                max: 295,
            },
            purple: {
                min: 135,
                max: 295,
            },
            black: {
                min: 32,
                max: 295,
            },
        },
    },
    闪闪贝改: {
        No: 117,
        name: '闪闪贝改',
        element: '水',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '六角恐龙改',
        evo50: '炽热魔人改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 230,
                max: 400,
            },
            yellow: {
                min: 23,
                max: 90,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 69,
                max: 290,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    皮皮孩改: {
        No: 118,
        name: '皮皮孩改',
        element: '木',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅱ',
        evo25: '骨子海贼改',
        evo50: '骨子船长改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 49,
                max: 298,
            },
            yellow: {
                min: 23,
                max: 98,
            },
            red: {
                min: 23,
                max: 98,
            },
            purple: {
                min: 238,
                max: 400,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    背背多改: {
        No: 119,
        name: '背背多改',
        element: '木',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击α',
        evo25: '草泥马骑士改',
        evo50: '棉花糖大王改',
        colors: {
            green: {
                min: 49,
                max: 296,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 49,
                max: 296,
            },
            red: {
                min: 34,
                max: 296,
            },
            purple: {
                min: 34,
                max: 296,
            },
            black: {
                min: 236,
                max: 400,
            },
        },
    },
    宿化夫改: {
        No: 120,
        name: '宿化夫改',
        element: '水',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '铁炮鳗鱼改',
        evo50: '牛楠楠改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 145,
                max: 292,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 242,
                max: 400,
            },
            purple: {
                min: 24,
                max: 92,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    鲑鱼嘭改: {
        No: 121,
        name: '鲑鱼嘭改',
        element: '水',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'C',
            def: 'A',
            spd: 'B',
            int: 'A',
        },
        skill: '究极攻击Ⅰ',
        evo25: '丸太君改',
        evo50: '怪鸟沙沙改',
        colors: {
            green: {
                min: 51,
                max: 298,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 51,
                max: 298,
            },
            red: {
                min: 35,
                max: 298,
            },
            purple: {
                min: 35,
                max: 298,
            },
            black: {
                min: 248,
                max: 400,
            },
        },
    },
    古瓦斯改: {
        No: 122,
        name: '古瓦斯改',
        element: '雷',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '怪鸟沙沙改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 240,
                max: 400,
            },
            yellow: {
                min: 24,
                max: 90,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 72,
                max: 290,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哈皮狮改: {
        No: 123,
        name: '哈皮狮改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'B',
            atk: 'B',
            def: 'B',
            spd: 'A',
            int: 'A',
        },
        skill: '加速之术Ⅱ',
        evo25: '哗哩可改',
        evo50: '风拳龙改',
        colors: {
            green: {
                min: 25,
                max: 198,
            },
            blue: {
                min: 37,
                max: 298,
            },
            yellow: {
                min: 258,
                max: 400,
            },
            red: {
                min: 37,
                max: 298,
            },
            purple: {
                min: 154,
                max: 298,
            },
            black: {
                min: 37,
                max: 298,
            },
        },
    },
    黑露露改: {
        No: 124,
        name: '黑露露改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'F',
            atk: 'C',
            def: 'C',
            spd: 'B',
            int: 'A',
        },
        skill: '加速之术Ⅱ',
        evo25: '发仙人改',
        evo50: '棉花糖大王改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 53,
                max: 297,
            },
            yellow: {
                min: 25,
                max: 97,
            },
            red: {
                min: 25,
                max: 97,
            },
            purple: {
                min: 257,
                max: 400,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    顾家风暴改: {
        No: 125,
        name: '顾家风暴改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'E',
            atk: 'A',
            def: 'B',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅰ',
        evo25: '家布龙先生改',
        evo50: '风拳龙改',
        colors: {
            green: {
                min: 258,
                max: 400,
            },
            blue: {
                min: 25,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 154,
                max: 298,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    骨子剑士改: {
        No: 126,
        name: '骨子剑士改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: '骨子海贼改',
        evo50: '骨子船长改',
        colors: {
            green: {
                min: 157,
                max: 293,
            },
            blue: {
                min: 78,
                max: 293,
            },
            yellow: {
                min: 157,
                max: 293,
            },
            red: {
                min: 157,
                max: 293,
            },
            purple: {
                min: 263,
                max: 400,
            },
            black: {
                min: 78,
                max: 293,
            },
        },
    },
    比布汽笛改: {
        No: 127,
        name: '比布汽笛改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'A',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '究极攻击Ⅱ',
        evo25: '红龙小助改',
        evo50: '火焱龙改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 159,
                max: 295,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 265,
                max: 400,
            },
            purple: {
                min: 26,
                max: 95,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    河童太郎改: {
        No: 128,
        name: '河童太郎改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '水平线攻击Ⅰ',
        evo25: '呱呱君改',
        evo50: null,
        colors: {
            green: {
                min: 267,
                max: 400,
            },
            blue: {
                min: 27,
                max: 97,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 160,
                max: 297,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    骨子海贼改: {
        No: 129,
        name: '骨子海贼改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: '骨子船长改',
        evo50: '欧巴太郎改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 57,
                max: 295,
            },
            yellow: {
                min: 27,
                max: 95,
            },
            red: {
                min: 27,
                max: 95,
            },
            purple: {
                min: 275,
                max: 400,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    热情诺斯改: {
        No: 130,
        name: '热情诺斯改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '究极攻击Ⅰ',
        evo25: '火雀丽改',
        evo50: '多驯犬改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 166,
                max: 298,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 278,
                max: 400,
            },
            purple: {
                min: 28,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哇尼鳄鱼改: {
        No: 131,
        name: '哇尼鳄鱼改',
        element: '暗',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '青龙助仔改',
        evo50: '朵拉卜改',
        colors: {
            green: {
                min: 28,
                max: 197,
            },
            blue: {
                min: 40,
                max: 297,
            },
            yellow: {
                min: 277,
                max: 400,
            },
            red: {
                min: 40,
                max: 297,
            },
            purple: {
                min: 166,
                max: 297,
            },
            black: {
                min: 40,
                max: 297,
            },
        },
    },
    波哟嘭改: {
        No: 132,
        name: '波哟嘭改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '加速之术Ⅱ',
        evo25: '朵拉卜改',
        evo50: null,
        colors: {
            green: {
                min: 283,
                max: 400,
            },
            blue: {
                min: 28,
                max: 93,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 169,
                max: 293,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    铁炮鳗鱼改: {
        No: 133,
        name: '铁炮鳗鱼改',
        element: '雷',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '牛楠楠改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 287,
                max: 400,
            },
            yellow: {
                min: 29,
                max: 97,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 86,
                max: 297,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    指甲龟改: {
        No: 134,
        name: '指甲龟改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'A',
        },
        skill: 'HP回复术Ⅱ',
        evo25: '炽热魔人改',
        evo50: null,
        colors: {
            green: {
                min: 60,
                max: 298,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 60,
                max: 298,
            },
            red: {
                min: 42,
                max: 298,
            },
            purple: {
                min: 42,
                max: 298,
            },
            black: {
                min: 288,
                max: 400,
            },
        },
    },
    木桩二郎改: {
        No: 135,
        name: '木桩二郎改',
        element: '木',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '蘑菇原人改',
        evo50: '啾啾树改',
        colors: {
            green: {
                min: 298,
                max: 500,
            },
            blue: {
                min: 30,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 178,
                max: 398,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    火雀丽改: {
        No: 136,
        name: '火雀丽改',
        element: '火',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'C',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅱ',
        evo25: '多驯犬改',
        evo50: '火焱龙改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 178,
                max: 398,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 298,
                max: 500,
            },
            purple: {
                min: 30,
                max: 98,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    幽浮改: {
        No: 137,
        name: '幽浮改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '箱子胖改',
        evo50: '歪罗王君改',
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 303,
                max: 500,
            },
            yellow: {
                min: 30,
                max: 93,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 90,
                max: 393,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    咪咪子改: {
        No: 138,
        name: '咪咪子改',
        element: '暗',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '连续攻击Ⅱ',
        evo25: '大舌Z改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 63,
                max: 394,
            },
            yellow: {
                min: 30,
                max: 94,
            },
            red: {
                min: 30,
                max: 94,
            },
            purple: {
                min: 304,
                max: 500,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    蘑菇原人改: {
        No: 139,
        name: '蘑菇原人改',
        element: '木',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '连续攻击Ⅰ',
        evo25: '啾啾树改',
        evo50: null,
        colors: {
            green: {
                min: 308,
                max: 500,
            },
            blue: {
                min: 30,
                max: 98,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 184,
                max: 398,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    绷带助人改: {
        No: 140,
        name: '绷带助人改',
        element: '暗',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: 'HP回复术Ⅲ',
        evo25: '烤串大王改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 65,
                max: 396,
            },
            yellow: {
                min: 31,
                max: 96,
            },
            red: {
                min: 31,
                max: 96,
            },
            purple: {
                min: 316,
                max: 500,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    箱子胖改: {
        No: 141,
        name: '箱子胖改',
        element: '无',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'B',
            def: 'S',
            spd: 'B',
            int: 'A',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '歪罗王君改',
        evo50: null,
        colors: {
            green: {
                min: 190,
                max: 398,
            },
            blue: {
                min: 95,
                max: 398,
            },
            yellow: {
                min: 190,
                max: 398,
            },
            red: {
                min: 190,
                max: 398,
            },
            purple: {
                min: 318,
                max: 500,
            },
            black: {
                min: 95,
                max: 398,
            },
        },
    },
    草泥马骑士改: {
        No: 142,
        name: '草泥马骑士改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '连续攻击Ⅰ',
        evo25: '棉花糖大王改',
        evo50: null,
        colors: {
            green: {
                min: 93,
                max: 390,
            },
            blue: {
                min: 310,
                max: 500,
            },
            yellow: {
                min: 93,
                max: 390,
            },
            red: {
                min: 186,
                max: 390,
            },
            purple: {
                min: 186,
                max: 390,
            },
            black: {
                min: 65,
                max: 390,
            },
        },
    },
    恐怖螺丝改: {
        No: 143,
        name: '恐怖螺丝改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '连续攻击Ⅱ',
        evo25: '大佬君改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 196,
                max: 398,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 328,
                max: 500,
            },
            purple: {
                min: 32,
                max: 198,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    凉风飘飘改: {
        No: 144,
        name: '凉风飘飘改',
        element: '暗',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '烤串大王改',
        evo50: null,
        colors: {
            green: {
                min: 32,
                max: 198,
            },
            blue: {
                min: 47,
                max: 398,
            },
            yellow: {
                min: 328,
                max: 500,
            },
            red: {
                min: 47,
                max: 398,
            },
            purple: {
                min: 196,
                max: 398,
            },
            black: {
                min: 47,
                max: 398,
            },
        },
    },
    青龙助仔改: {
        No: 145,
        name: '青龙助仔改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'A',
            def: 'A',
            spd: 'B',
            int: 'B',
        },
        skill: '究极攻击Ⅱ',
        evo25: '朵拉卜改',
        evo50: null,
        colors: {
            green: {
                min: 321,
                max: 500,
            },
            blue: {
                min: 32,
                max: 191,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 192,
                max: 391,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    啾啾树改: {
        No: 146,
        name: '啾啾树改',
        element: '木',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'B',
            def: 'A',
            spd: 'B',
            int: 'A',
        },
        skill: 'HP回复术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 335,
                max: 500,
            },
            blue: {
                min: 34,
                max: 195,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 201,
                max: 395,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    发仙人改: {
        No: 147,
        name: '发仙人改',
        element: '雷',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'E',
            atk: 'A',
            def: 'B',
            spd: 'S',
            int: 'A',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '棉花糖大王改',
        evo50: null,
        colors: {
            green: {
                min: 34,
                max: 298,
            },
            blue: {
                min: 49,
                max: 398,
            },
            yellow: {
                min: 338,
                max: 500,
            },
            red: {
                min: 49,
                max: 398,
            },
            purple: {
                min: 202,
                max: 398,
            },
            black: {
                min: 49,
                max: 398,
            },
        },
    },
    家布龙先生改: {
        No: 148,
        name: '家布龙先生改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '连续攻击Ⅱ',
        evo25: '风拳龙改',
        evo50: null,
        colors: {
            green: {
                min: 70,
                max: 398,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 70,
                max: 398,
            },
            red: {
                min: 49,
                max: 398,
            },
            purple: {
                min: 49,
                max: 398,
            },
            black: {
                min: 338,
                max: 500,
            },
        },
    },
    六角恐龙改: {
        No: 149,
        name: '六角恐龙改',
        element: '雷',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '究极攻击Ⅱ',
        evo25: '炽热魔人改',
        evo50: null,
        colors: {
            green: {
                min: 210,
                max: 400,
            },
            blue: {
                min: 105,
                max: 400,
            },
            yellow: {
                min: 210,
                max: 400,
            },
            red: {
                min: 210,
                max: 400,
            },
            purple: {
                min: 350,
                max: 500,
            },
            black: {
                min: 105,
                max: 400,
            },
        },
    },
    骨子船长改: {
        No: 150,
        name: '骨子船长改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '欧巴太郎改',
        evo50: null,
        colors: {
            green: {
                min: 72,
                max: 384,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 72,
                max: 394,
            },
            red: {
                min: 50,
                max: 394,
            },
            purple: {
                min: 50,
                max: 394,
            },
            black: {
                min: 334,
                max: 500,
            },
        },
    },
    多驯犬改: {
        No: 151,
        name: '多驯犬改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '水平线攻击Ⅱ',
        evo25: '火焱龙改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 72,
                max: 398,
            },
            yellow: {
                min: 35,
                max: 198,
            },
            red: {
                min: 35,
                max: 198,
            },
            purple: {
                min: 348,
                max: 500,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    红龙小助改: {
        No: 152,
        name: '红龙小助改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '究极攻击Ⅱ',
        evo25: '火焱龙改',
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 213,
                max: 395,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 355,
                max: 500,
            },
            purple: {
                min: 35,
                max: 195,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    哗哩可改: {
        No: 153,
        name: '哗哩可改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅱ',
        evo25: '风拳龙改',
        evo50: null,
        colors: {
            green: {
                min: 35,
                max: 298,
            },
            blue: {
                min: 51,
                max: 398,
            },
            yellow: {
                min: 358,
                max: 500,
            },
            red: {
                min: 51,
                max: 398,
            },
            purple: {
                min: 214,
                max: 398,
            },
            black: {
                min: 51,
                max: 398,
            },
        },
    },
    磐石花改: {
        No: 154,
        name: '磐石花改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '加速之术Ⅲ',
        evo25: '岩魔人改',
        evo50: '欧巴太郎改',
        colors: {
            green: {
                min: 359,
                max: 500,
            },
            blue: {
                min: 35,
                max: 199,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 215,
                max: 399,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    丸太君改: {
        No: 155,
        name: '丸太君改',
        element: '暗',
        size: '小',
        stats: {
            hp: 'A',
            sp: 'E',
            atk: 'A',
            def: 'B',
            spd: 'S',
            int: 'A',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '怪鸟沙沙改',
        evo50: null,
        colors: {
            green: {
                min: 37,
                max: 298,
            },
            blue: {
                min: 53,
                max: 398,
            },
            yellow: {
                min: 368,
                max: 500,
            },
            red: {
                min: 53,
                max: 398,
            },
            purple: {
                min: 220,
                max: 398,
            },
            black: {
                min: 53,
                max: 398,
            },
        },
    },
    岩魔人改: {
        No: 156,
        name: '岩魔人改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '连续攻击Ⅱ',
        evo25: '欧巴太郎改',
        evo50: null,
        colors: {
            green: {
                min: 76,
                max: 295,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 76,
                max: 395,
            },
            red: {
                min: 53,
                max: 395,
            },
            purple: {
                min: 53,
                max: 395,
            },
            black: {
                min: 365,
                max: 500,
            },
        },
    },
    炽热魔人改: {
        No: 157,
        name: '炽热魔人改',
        element: '火',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 226,
                max: 397,
            },
            blue: {
                min: 113,
                max: 397,
            },
            yellow: {
                min: 226,
                max: 397,
            },
            red: {
                min: 226,
                max: 397,
            },
            purple: {
                min: 377,
                max: 500,
            },
            black: {
                min: 113,
                max: 397,
            },
        },
    },
    棉花糖大王改: {
        No: 158,
        name: '棉花糖大王改',
        element: '无',
        size: '中',
        stats: {
            hp: 'A',
            sp: 'E',
            atk: 'A',
            def: 'A',
            spd: 'S',
            int: 'A',
        },
        skill: '连续攻击Ⅱ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 112,
                max: 395,
            },
            blue: {
                min: 375,
                max: 500,
            },
            yellow: {
                min: 112,
                max: 395,
            },
            red: {
                min: 225,
                max: 395,
            },
            purple: {
                min: 225,
                max: 395,
            },
            black: {
                min: 78,
                max: 395,
            },
        },
    },
    牛楠楠改: {
        No: 159,
        name: '牛楠楠改',
        element: '水',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'S',
            spd: 'B',
            int: 'A',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 377,
                max: 500,
            },
            yellow: {
                min: 38,
                max: 197,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 113,
                max: 397,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    大佬君改: {
        No: 160,
        name: '大佬君改',
        element: '水',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 80,
                max: 395,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 80,
                max: 395,
            },
            red: {
                min: 56,
                max: 395,
            },
            purple: {
                min: 56,
                max: 395,
            },
            black: {
                min: 385,
                max: 500,
            },
        },
    },
    呱呱君改: {
        No: 161,
        name: '呱呱君改',
        element: '木',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'C',
            atk: 'B',
            def: 'B',
            spd: 'B',
            int: 'S',
        },
        skill: 'HP回复术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 81,
                max: 398,
            },
            yellow: {
                min: 39,
                max: 198,
            },
            red: {
                min: 39,
                max: 198,
            },
            purple: {
                min: 388,
                max: 500,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    怪鸟沙沙改: {
        No: 162,
        name: '怪鸟沙沙改',
        element: '雷',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'D',
            atk: 'A',
            def: 'A',
            spd: 'S',
            int: 'A',
        },
        skill: '加速之术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 383,
                max: 500,
            },
            yellow: {
                min: 38,
                max: 193,
            },
            red: {
                min: -999,
                max: 999,
            },
            purple: {
                min: 114,
                max: 393,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    朵拉卜改: {
        No: 163,
        name: '朵拉卜改',
        element: '火',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'E',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 398,
                max: 500,
            },
            blue: {
                min: 40,
                max: 198,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 238,
                max: 498,
            },
            purple: {
                min: -999,
                max: 999,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    风拳龙改: {
        No: 164,
        name: '风拳龙改',
        element: '木',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'A',
            atk: 'A',
            def: 'S',
            spd: 'B',
            int: 'A',
        },
        skill: '究极攻击Ⅱ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 39,
                max: 295,
            },
            blue: {
                min: 57,
                max: 495,
            },
            yellow: {
                min: 395,
                max: 500,
            },
            red: {
                min: 57,
                max: 495,
            },
            purple: {
                min: 237,
                max: 495,
            },
            black: {
                min: 57,
                max: 495,
            },
        },
    },
    歪罗王君改: {
        No: 165,
        name: '歪罗王君改',
        element: '雷',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'S',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'B',
        },
        skill: 'HP回复术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 117,
                max: 490,
            },
            blue: {
                min: 390,
                max: 500,
            },
            yellow: {
                min: 117,
                max: 490,
            },
            red: {
                min: 234,
                max: 490,
            },
            purple: {
                min: 234,
                max: 490,
            },
            black: {
                min: 81,
                max: 490,
            },
        },
    },
    烤串大王改: {
        No: 166,
        name: '烤串大王改',
        element: '暗',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'B',
            atk: 'A',
            def: 'A',
            spd: 'S',
            int: 'A',
        },
        skill: '究极攻击Ⅱ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 85,
                max: 498,
            },
            blue: {
                min: -999,
                max: 999,
            },
            yellow: {
                min: 85,
                max: 498,
            },
            red: {
                min: 59,
                max: 498,
            },
            purple: {
                min: 59,
                max: 498,
            },
            black: {
                min: 408,
                max: 500,
            },
        },
    },
    欧巴太郎改: {
        No: 167,
        name: '欧巴太郎改',
        element: '雷',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'A',
            def: 'A',
            spd: 'S',
            int: 'S',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 242,
                max: 494,
            },
            blue: {
                min: 121,
                max: 494,
            },
            yellow: {
                min: 242,
                max: 494,
            },
            red: {
                min: 242,
                max: 494,
            },
            purple: {
                min: 404,
                max: 500,
            },
            black: {
                min: 121,
                max: 491,
            },
        },
    },
    火焱龙改: {
        No: 168,
        name: '火焱龙改',
        element: '火',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: -999,
                max: 999,
            },
            blue: {
                min: 244,
                max: 497,
            },
            yellow: {
                min: -999,
                max: 999,
            },
            red: {
                min: 407,
                max: 500,
            },
            purple: {
                min: 41,
                max: 197,
            },
            black: {
                min: -999,
                max: 999,
            },
        },
    },
    大舌Z改: {
        No: 169,
        name: '大舌Z改',
        element: '暗',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'A',
            atk: 'S',
            def: 'A',
            spd: 'S',
            int: 'S',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 125,
                max: 498,
            },
            blue: {
                min: 418,
                max: 500,
            },
            yellow: {
                min: 125,
                max: 498,
            },
            red: {
                min: 250,
                max: 498,
            },
            purple: {
                min: 250,
                max: 498,
            },
            black: {
                min: 87,
                max: 498,
            },
        },
    },
    大佬君极: {
        No: 170,
        name: '大佬君极',
        element: '水',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'A',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    呱呱君极: {
        No: 171,
        name: '呱呱君极',
        element: '木',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'C',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: 'HP回复术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    怪鸟沙沙极: {
        No: 172,
        name: '怪鸟沙沙极',
        element: '雷',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'D',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '加速之术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    朵拉卜极: {
        No: 173,
        name: '朵拉卜极',
        element: '火',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'E',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    风拳龙极: {
        No: 174,
        name: '风拳龙极',
        element: '木',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'A',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '究极攻击Ⅱ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    歪罗王君极: {
        No: 175,
        name: '歪罗王君极',
        element: '雷',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'A',
        },
        skill: 'HP回复术Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    烤串大王极: {
        No: 176,
        name: '烤串大王极',
        element: '暗',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '究极攻击Ⅱ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    欧巴太郎极: {
        No: 177,
        name: '欧巴太郎极',
        element: '雷',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    火焱龙极: {
        No: 178,
        name: '火焱龙极',
        element: '火',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    大舌Z极: {
        No: 179,
        name: '大舌Z极',
        element: '暗',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'A',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    肩骨龙: {
        No: 180,
        name: '肩骨龙',
        element: '暗',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'F',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '连续攻击Ⅰ',
        evo25: '肩骨龙改',
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    电弩弩: {
        No: 181,
        name: '电弩弩',
        element: '雷',
        size: '大',
        stats: {
            hp: 'A',
            sp: 'S',
            atk: 'A',
            def: 'S',
            spd: 'B',
            int: 'A',
        },
        skill: '连续攻击Ⅰ',
        evo25: '电弩弩改',
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    水仙龙: {
        No: 182,
        name: '水仙龙',
        element: '水',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'B',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: 'HP回复术Ⅰ',
        evo25: '水仙龙改',
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    肩骨龙改: {
        No: 183,
        name: '肩骨龙改',
        element: '暗',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '连续攻击Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    电弩弩改: {
        No: 184,
        name: '电弩弩改',
        element: '雷',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'A',
            def: 'S',
            spd: 'A',
            int: 'S',
        },
        skill: '连续攻击Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    水仙龙改: {
        No: 185,
        name: '水仙龙改',
        element: '水',
        size: '大',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'B',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: 'HP回复术Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    小开罗君: {
        No: 186,
        name: '小开罗君',
        element: '无',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'B',
            atk: 'D',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '连续攻击Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    蓝色小开罗君: {
        No: 187,
        name: '蓝色小开罗君',
        element: '水',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'S',
            atk: 'D',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '加速之术Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    红色小开罗君: {
        No: 188,
        name: '红色小开罗君',
        element: '火',
        size: '小',
        stats: {
            hp: 'C',
            sp: 'D',
            atk: 'D',
            def: 'C',
            spd: 'C',
            int: 'C',
        },
        skill: '究极攻击Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    双星小开罗君: {
        No: 189,
        name: '双星小开罗君',
        element: '雷',
        size: '小',
        stats: {
            hp: 'B',
            sp: 'C',
            atk: 'C',
            def: 'B',
            spd: 'B',
            int: 'B',
        },
        skill: '加速之术Ⅰ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    开罗君: {
        No: 190,
        name: '开罗君',
        element: '木',
        size: '中',
        stats: {
            hp: 'S',
            sp: 'B',
            atk: 'B',
            def: 'S',
            spd: 'A',
            int: 'S',
        },
        skill: '水平线攻击Ⅲ',
        evo25: '开罗君改',
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    开罗英雄: {
        No: 191,
        name: '开罗英雄',
        element: '火',
        size: '中',
        stats: {
            hp: 'S',
            sp: 'A',
            atk: 'A',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: '开罗英雄改',
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    钻头开罗君: {
        No: 192,
        name: '钻头开罗君',
        element: '雷',
        size: '中',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'S',
            def: 'A',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: '钻头开罗君改',
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    开罗君改: {
        No: 193,
        name: '开罗君改',
        element: '木',
        size: '中',
        stats: {
            hp: 'S',
            sp: 'D',
            atk: 'B',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '水平线攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    开罗英雄改: {
        No: 194,
        name: '开罗英雄改',
        element: '火',
        size: '中',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'S',
            def: 'S',
            spd: 'S',
            int: 'S',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
    钻头开罗君改: {
        No: 195,
        name: '钻头开罗君改',
        element: '雷',
        size: '中',
        stats: {
            hp: 'S',
            sp: 'S',
            atk: 'S',
            def: 'S',
            spd: 'A',
            int: 'A',
        },
        skill: '究极攻击Ⅲ',
        evo25: null,
        evo50: null,
        colors: {
            green: {
                min: 999,
                max: 999,
            },
            blue: {
                min: 999,
                max: 999,
            },
            yellow: {
                min: 999,
                max: 999,
            },
            red: {
                min: 999,
                max: 999,
            },
            purple: {
                min: 999,
                max: 999,
            },
            black: {
                min: 999,
                max: 999,
            },
        },
    },
};
