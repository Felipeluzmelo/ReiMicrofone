import { Button, Modal, Space } from 'antd';
import React from 'react';

const info = () => {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() { },
    });
};

const App = () => (
    <Space wrap>
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
    </Space>
);
export default App;