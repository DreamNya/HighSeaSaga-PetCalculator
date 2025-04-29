import { Card, Divider, Row, Col, InputNumber, Select, theme } from 'antd';
import { lighten } from 'polished';
import { Colors } from '../data/items';
import { bg } from '../App';
import { useDispatch } from '../hooks/Redux';
import { changeBasic } from '../store/EggStore';
import { useSelector } from '../hooks/Redux';

// 扩展CSS变量
declare module 'react' {
    interface CSSProperties {
        [key: string]: string | number;
    }
}

const BasicApp: React.FC = () => {
    const { token } = theme.useToken();
    const dispatch = useDispatch();
    const { fillTimes, colorMax } = useSelector((state) => state.EggStore);

    return (
        <Card style={{ backgroundColor: lighten(0.1, bg), backdropFilter: 'blur(4px)' }}>
            <Divider orientation="left" style={{ marginTop: 0 }}>
                蛋基础属性
            </Divider>
            <Row gutter={48}>
                <Col span={12}>
                    <Row gutter={[16, 16]}>
                        {Object.entries(Colors).map(([color, name]) => {
                            return (
                                <Col span={8} key={color}>
                                    <InputNumber
                                        addonBefore={name}
                                        placeholder="0"
                                        onChange={(value) => {
                                            dispatch(changeBasic({ [color]: value }));
                                        }}
                                        style={{ '--color': color }}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col span={12}>
                    <Row gutter={[16, 16]}>
                        <Col span={11}>
                            <Select
                                prefix="蛋星级"
                                defaultValue={1}
                                onChange={(value: number) => {
                                    dispatch(changeBasic({ star: value }));
                                }}
                                style={{ width: '100%', height: '100%', textAlign: 'left' }}>
                                {Array.from({ length: 5 }, (_, i) => i).map((i) => {
                                    const num = i + 1;
                                    return (
                                        <Select.Option key={num} value={num}>
                                            {'★'.repeat(num) + '☆'.repeat(5 - num)}
                                        </Select.Option>
                                    );
                                })}
                                <Select.Option key={6} value={6}>
                                    {'★'.repeat(5) + '（双六）'}
                                </Select.Option>
                            </Select>
                        </Col>
                        <Col span={8}>
                            <InputNumber
                                addonBefore={'颜色上限'}
                                value={colorMax}
                                disabled
                                style={{ '--color': token.colorTextDisabled }}
                            />
                        </Col>
                        <Col span={10}>
                            <InputNumber
                                addonBefore={'剩余投喂次数'}
                                defaultValue={1}
                                value={fillTimes}
                                max={12}
                                min={1}
                                onChange={(value: number | null) => {
                                    dispatch(changeBasic({ fillTimes: value }));
                                }}
                                style={{ '--color': 'black' }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default BasicApp;
