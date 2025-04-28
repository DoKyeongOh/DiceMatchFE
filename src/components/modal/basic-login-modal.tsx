import { Form, Input, Modal } from "antd";
import { BasicLoginData } from "../../types/auth.type";
import { Controller, useForm } from "react-hook-form";
import { login } from "../../api/login/auth.api";

interface BasicLoginModalProps {
    open: boolean;
    onClose: () => void;
}

const BasicLoginModal = ({ open, onClose }: BasicLoginModalProps) => {
    const { control, handleSubmit } = useForm<BasicLoginData>();

    const onValid = (data: BasicLoginData) => {
        login(data);
        onClose();
    }

    return <Modal
        title="로그인"
        open={open}
        onOk={handleSubmit(onValid)}
        onCancel={() => onClose()}
        okText="로그인"
        cancelText="취소"
    >

        <Controller
            name="identity"
            control={control}
            rules={{ required: "아이디를 입력해주세요" }}
            render={({ field, fieldState: { error } }) => {
                return (
                    <Form.Item
                        layout="vertical"
                        label="아이디"
                        validateStatus={error ? "error" : ""}
                        help={error?.message}
                    >
                        <Input {...field} />
                    </Form.Item>
                );
            }}
        />

        <Controller
            name="password"
            control={control}
            rules={{ required: "비밀번호를 입력해주세요" }}
            render={({
                field,
                fieldState: { error },
            }) => (
                <Form.Item
                    layout="vertical"
                    label="비밀번호"
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                >
                    <Input.Password {...field} />
                </Form.Item>
            )}
        />
    </Modal>;
};

export default BasicLoginModal;
