import { Card, Divider, Row, Col, Table, type TableColumnsType, Button } from 'antd';
import { lighten } from 'polished';
import { ItemKeys, type itemName, type Item, itemList } from '../data/items';
import { bg } from '../App';
import { useDispatch } from '../hooks/Redux';
import { useSelector } from '../hooks/Redux';
import { BiCollapseAlt, BiExpandAlt } from 'react-icons/bi';
import React from 'react';
import { changeItem } from '../store/ItemStore';

interface ItemType extends Item {
    name: itemName;
}
const columns: TableColumnsType<ItemType> = Object.entries(ItemKeys).map(([key, title]) => {
    return { title, dataIndex: key, key, align: 'center' };
});

const BreedItemApp: React.FC = () => {
    const [show, setShow] = React.useState(false);
    const dispatch = useDispatch();
    const ItemStore = useSelector((state) => state.ItemStore);

    const tableContent = React.useMemo(() => {
        return Object.entries(itemList).map(([list, items]) => (
            <Col span={24} key={list}>
                <Table<ItemType>
                    size={'small'}
                    scroll={{ y: 300 }}
                    pagination={false}
                    columns={columns}
                    rowSelection={{
                        onChange: (selectedRowKeys: React.Key[]) => {
                            dispatch(changeItem({ name: list, value: selectedRowKeys }));
                        },
                        selectedRowKeys: ItemStore[list],
                    }}
                    dataSource={Object.entries(items).map(([name, item]) => ({
                        key: name,
                        name,
                        ...item,
                    }))}
                />
            </Col>
        ));
    }, [ItemStore, dispatch]);

    return (
        <Card style={{ backgroundColor: lighten(0.1, bg), backdropFilter: 'blur(4px)', marginTop: 20 }}>
            <Button
                shape="circle"
                onClick={() => setShow(!show)}
                icon={show ? <BiExpandAlt /> : <BiCollapseAlt />}
                style={{
                    position: 'absolute',
                    top: 5,
                    left: 5,
                    rotate: '90deg',
                    background: 'unset',
                    border: 0,
                    boxShadow: 'unset',
                }}
            />

            <Divider orientation="left" style={{ marginTop: 0 }}>
                孵化物品
            </Divider>
            <Row gutter={[12, 24]} className={show ? '' : 'd-none'}>
                {tableContent}
            </Row>
        </Card>
    );
};

export default BreedItemApp;
