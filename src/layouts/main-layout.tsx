import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {

    return (
        <Layout className='w-full h-full'>
            <Header className='flex justify-between items-center'>
                <div className="text-white text-xl font-bold whitespace-nowrap">Dice Match</div>
            </Header>
            <Content style={{ width: '100%', padding: '20px 50px' }}>
                <div className="bg-white p-6 rounded-lg shadow">
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ width: '100%', textAlign: 'center' }}>
                Dice Match Game ©{new Date().getFullYear()} Created by You
            </Footer>
        </Layout>
    );
};

export default MainLayout; 