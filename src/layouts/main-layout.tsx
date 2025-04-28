import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, Layout } from "antd";
import { useAppSelector } from "../hooks/redux";
import BasicLoginModal from "../components/modal/basic-login-modal";
import BasicRegisterModal from "../components/modal/basic-register-modal";
const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
    const { userId } = useAppSelector((state) => state.auth);

    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
    const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

    return (
        <Layout className="w-full h-full">
            <Header className="flex justify-between items-center">
                <div className="text-white text-xl font-bold whitespace-nowrap">
                    Dice Match
                </div>
                {userId ? <div className="text-white">로그인 됨</div> : <div className="flex gap-2">
                    <Button
                        type="primary"
                        className="focus:outline-none"
                        onClick={() => setShowLoginModal(true)}
                    >
                        로그인
                    </Button>
                    <Button
                        type="primary"
                        className="focus:outline-none"
                        onClick={() => setShowRegisterModal(true)}
                    >
                        회원가입
                    </Button></div>}
                <BasicLoginModal open={showLoginModal} onClose={() => { setShowLoginModal(false) }} />
                <BasicRegisterModal open={showRegisterModal} onClose={() => { setShowRegisterModal(false) }} />
            </Header>
            <Content style={{ width: "100%", padding: "20px 50px" }}>
                <div className="bg-white p-6 rounded-lg shadow">
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ width: "100%", textAlign: "center" }}>
                Dice Match Game ©{new Date().getFullYear()} Created by You
            </Footer>
        </Layout>
    );
};

export default MainLayout;
