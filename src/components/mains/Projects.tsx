import {useState} from "react";
import styled from "styled-components";
import {StyledMain} from "./Home.tsx";

const Calculator = styled.div`
    width: 320px;
    max-width: 95vw;
    margin: 32px auto;
    padding: 18px;
    border: 4px solid gray;
    border-radius: 12px;
    background-color: lightgray;
`;
const StyledButton = styled.button`
    padding: 10px 16px;
    margin: 6px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 6px;
    border: 2px solid #555;
    background-color: #f0f0f0;
`;
const StyledLabel = styled.label`
    display: block;
    margin: 12px 0 4px 0;
    font-weight: bold;
    font-size: 16px;
`;

export default function Projects(){
    const [one, setOne] = useState<string>(""); // store as string
    const [two, setTwo] = useState<string>(""); // store as string
    const [output, setOutput] = useState<string>("");
    const [color, setColor] = useState<string>("black");

    const StyledH2 = styled.h2`
        color: ${color};
    `;

    const n1 = Number(one);
    const n2 = Number(two);
    function updateOutput(value: number) {
        setOutput(String(value)); // convert back to string
        if (value < 0) {
            setColor("red");
        } else if (value > 0) {
            setColor("blue");
        } else {
            setColor("black");
        }
    }
    function doAdd() {
        updateOutput(n1 + n2);
    }
    function doMinus() {
        updateOutput(n1 - n2);
    }
    function doMultiply() {
        updateOutput(n1 * n2);
    }
    function doDivide() {
        updateOutput(n1 / n2);
    }
    function doPower() {
        let ans = 1;
        for (let i = 0; i < n2; i++) ans *= n1;
        updateOutput(ans);
    }
    function doClear() {
        setOne("");
        setTwo("");
        setOutput("");
        setColor("black");
    }

    return (
        <StyledMain>
            <title>Projects | Resume</title>
            <Calculator>
                <h2>Calculator</h2>
                <StyledLabel htmlFor="one">Give me number: </StyledLabel><input id="one" type="number" value={one} onChange={(e) => setOne(e.target.value)}/><br/>
                <StyledLabel htmlFor="two">Give me number: </StyledLabel><input id="two" type="number" value={two} onChange={(e) => setTwo(e.target.value)}/><br/>
                <StyledButton onClick={doAdd}>+</StyledButton>
                <StyledButton onClick={doMinus}>-</StyledButton>
                <StyledButton onClick={doMultiply}>*</StyledButton>
                <StyledButton onClick={doDivide}>/</StyledButton>
                <StyledButton onClick={doPower}>**</StyledButton>
                <StyledButton onClick={doClear}>Clear</StyledButton>
                <StyledH2 id="output">{output}</StyledH2>
            </Calculator>
        </StyledMain>
    )
}