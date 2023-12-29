import React from "react";
import Button from "./Button.jsx";
import { vi, describe, expect, it} from 'vitest';
import {render,screen,fireEvent} from "@testing-library/react";

const handelClick =  vi.fn()
describe("test Button", ()=>{
    it('isButton', () => {
        render(<Button>text</Button>)
         expect(screen.getByText("text")).toBeInTheDocument()
    })
    it('isProps',()=>{
        render(<Button className={"btn-primari"}>text</Button>)
	    expect(screen.getByText("text")).toHaveClass("btn-primari")
    })
    it('isType',()=>{
        render(<Button>text</Button>)
	    expect(screen.getByText("text")).toHaveAttribute("type","button")
    })
    it('change',()=>{
        render(<Button type={"submite"}>text</Button>)
	    expect(screen.getByText("text")).toHaveAttribute("type","submite")
    })
    it('onClick',()=>{
        const {container} = render(<Button onClick={handelClick}>text</Button>)
        const button = container.firstChild
        fireEvent.click(button)
	    expect(handelClick).toHaveBeenCalled()
    })

})
