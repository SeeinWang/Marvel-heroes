import React from 'react';
import { Modal, List, Button} from 'antd';

const DetailModal = ({items, visible, handleClose}) => {
    const data = [];
    if(items !== undefined && items.length > 0){
        for(let i=0; i<items.length; i++){
            data.push(items[i].name);
        }
    }
    return (
    <Modal
          title="Summary"
          visible={visible}
          onCancel={handleClose}
          footer={[<Button type='primary' onClick={handleClose}>Close</Button>]}
        >
           <List
            size="small"
            pagination={{
                pageSize: 5,
            }}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
    />
    </Modal>
    )
}

export default DetailModal;
