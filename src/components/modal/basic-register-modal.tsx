import { Form, Input, Modal } from "antd";
import { BasicRegistrationData } from "../../types/auth.type";
import { Controller, useForm } from "react-hook-form";
import { register } from "../../api/login/auth.api";

interface BasicRegisterModalProps {
    open: boolean;
    onClose: () => void;
}

const BasicRegisterModal = ({ open, onClose }: BasicRegisterModalProps) => {
    const { control, handleSubmit, watch } = useForm<BasicRegistrationData>();

    const onValid = (data: BasicRegistrationData) => {
        register(data);
        onClose();
    }

    return <Modal
        title="회원가입"
        open={open}
        onOk={handleSubmit(onValid)}
        onCancel={() => onClose()}
        okText="회원가입"
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

        <Controller
            name="passwordCheck"
            control={control}
            rules={{
                required: "비밀번호 확인을 입력해주세요", validate: (value) => {
                    if (watch("password") !== value) {
                        return "비밀번호가 일치하지 않습니다.";
                    }
                }
            }}
            render={({
                field,
                fieldState: { error },
            }) => (
                <Form.Item
                    layout="vertical"
                    label="비밀번호 확인"
                    validateStatus={error ? "error" : ""}
                    help={error?.message}
                >
                    <Input.Password {...field} />
                </Form.Item>
            )}
        />
    </Modal>;
};

export default BasicRegisterModal;
