import styled from 'styled-components';

const PhoneWrapper = styled.div`
    height: 100%;
    max-height: 650px;
    min-height: 650px;
    min-width: 350px;
    aspect-ratio: 0.5;
    position: relative;

    .sphnone-content-wrapper {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 1;
        position: relative;
        background: white;
        border-radius: 46px;
    }

    & > * {
        box-sizing: border-box;
    }

    & .sphone-device-frame {
        height: 100%;
        background: #222;
        border-radius: 68px;
        box-shadow: inset 0 0 2px 2px #c8cacb, inset 0 0 0 7px #e2e3e4;
        padding: 20px;
        width: 100%;
    }

    & .sphone-device-header {
        background: #222;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        height: 30px;
        position: absolute;
        left: calc(50% - 17%);
        top: 20px;
        width: 35%;
        z-index: 1;

        &:before,
        &:after {
            content: '';
            height: 10px;
            position: absolute;
            top: 0;
            width: 10px;
        }

        &:before {
            background: radial-gradient(circle at bottom right, transparent 0, transparent 75%, #222 75%, #222 100%);
            right: -10px;
        }

        &:after {
            background: radial-gradient(circle at bottom left, transparent 0, transparent 75%, #222 75%, #222 100%);
            left: -10px;
        }

        & .sphone-device-sensors {
            position: absolute;
            width: 90%;
            top: -20px;

            &:before,
            &:after {
                content: '';
                position: absolute;
            }

            &:before {
                background: radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%),
                radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%);
                border-radius: 50%;
                box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.05);
                height: 10px;
                left: 40%;
                margin-left: 42px;
                top: 30px;
                width: 10px;
            }

            &:after {
                background: #333;
                border-radius: 3px;
                height: 6px;
                left: 50%;
                margin-left: -25px;
                top: 32px;
                width: 50px;
            }
        }
    }

    & .sphone-device-btns {
        background: #c8cacb;
        height: 32px;
        left: -2px;
        position: absolute;
        top: 115px;
        width: 3px;

        &:before,
        &:after {
            background: #c8cacb;
            content: '';
            height: 62px;
            left: 0;
            position: absolute;
            width: 3px;
        }

        &:before {
            top: 140px;
        }

        &:after {
            top: 60px;
        }
    }
`;

export default PhoneWrapper;
