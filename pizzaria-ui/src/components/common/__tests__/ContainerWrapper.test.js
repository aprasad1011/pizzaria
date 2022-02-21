import {mount} from "enzyme";
import {ContainerWrapper} from "../ContainerWrapper";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

describe('Test suite for container wrapper',  () => {

    test("it should wrap children inside container", () => {
        const wrapper = mount(<ContainerWrapper>
            <div>Test children render</div>
        </ContainerWrapper>);
        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(Box)).toHaveLength(1);
    });

    test("it should render children inside container", () => {
        const wrapper = mount(<ContainerWrapper>
            <div>Test children render</div>
        </ContainerWrapper>);
        expect(wrapper.text()).toContain('Test children render');
    });
});