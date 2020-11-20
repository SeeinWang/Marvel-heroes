import React from 'react';
import { Modal, List, Button} from 'antd';

const DetailModal = ({items, visible, handleClose}) => {
    const data = [];
    if(items !== undefined && items.length > 0){
        for(let i=0; i<items.length; i++){
            const item = {
                name:items[i].name,
                id:i,
            }
            data.push(item);
        }
    }
    return (
    <Modal
          title="List of items' name in this collection"
          visible={visible}
          onCancel={handleClose}
          footer={[<Button type='primary' key={1} onClick={handleClose}>Close</Button>]}
        >
           <List
            size="small"
            pagination={{
                pageSize: 5,
            }}
            bordered
            dataSource={data}
            renderItem={item => <List.Item key={items.id}>{item.name}</List.Item>}
    />
    </Modal>
    )
}

export default DetailModal;
