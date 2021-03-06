import { withFormik, FormikProps, FormikErrors, Field } from "formik";
import styled from "styled-components";

export const FormWrap = styled.div``;

export const Form = styled.form`
    margin-top: 14px;
    display: flex;
    flex-direction: column;
`;

export const InputWrap = styled.div`
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;

    & > .input {
        margin-top: 9px;
        max-width: 315px;

        font-size: ${({ theme }) => theme.fontSize["sm"]};
        line-height: ${({ theme }) => theme.lineHeight.body};
        font-weight: 300;

        padding: 15px 30px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.color.main.black};
        background: ${({ theme }) => theme.color.body.secondary};

        @media screen and (max-width: 1200px) {
            max-width: 100%;
        }
    }

    & > .textarea {
        // width: 100%;
        // height: 200px;

        margin-top: 9px;
        max-width: 315px;

        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-size: ${({ theme }) => theme.fontSize["sm"]};
        line-height: ${({ theme }) => theme.lineHeight.body};
        font-weight: 400;

        padding: 15px 30px;
        padding-bottom: 29px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.color.main.black};
        background: ${({ theme }) => theme.color.body.secondary};

        @media screen and (max-width: 1200px) {
            max-width: 100%;
        }
    }
`;

export const Label = styled.label`
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    line-height: ${({ theme }) => theme.lineHeight.body};
    font-weight: 700;
`;

export const Textarea = styled.textarea`
    margin-top: 9px;
    max-width: 315px;

    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    line-height: ${({ theme }) => theme.lineHeight.body};
    font-weight: 400;

    padding: 15px 30px;
    padding-bottom: 29px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.main.black};
    background: ${({ theme }) => theme.color.body.secondary};

    @media screen and (max-width: 960px) {
        max-width: 100%;
    }
`;

export const Input = styled.input`
    margin-top: 9px;
    max-width: 315px;

    font-size: ${({ theme }) => theme.fontSize["sm"]};
    line-height: ${({ theme }) => theme.lineHeight.body};
    font-weight: 300;

    padding: 15px 30px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.main.black};
    background: ${({ theme }) => theme.color.body.secondary};

    @media screen and (max-width: 960px) {
        max-width: 100%;
    }
`;
