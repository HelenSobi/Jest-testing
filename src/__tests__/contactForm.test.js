import { screen , render } from '@testing-library/react'
import ContactForm from "../components/ContactForm";

//Test Case 1 : should load heading 
test("should have heading",()=>{
    render(<ContactForm/>);
    const result = screen.getByRole("heading");
    expect(result).toBeInTheDocument();

});
//Test Case 2: should have Submit Text
test("should have Button Text in the component",()=>{
    render(<ContactForm/>);
    const result = screen.getByText("Submit");
    expect(result).toBeInTheDocument();

});
//Test Case 3: should load input name
test("should have placeholder Text in the component",()=>{
    render(<ContactForm/>);
    const name = screen.getByPlaceholderText("Enter the Username");
    expect(name).toBeInTheDocument();

});
//Test Case 4: Find all the input boxes
test("should have all TextBoxes in the component",()=>{
    render(<ContactForm/>);
    //Querying
    const textboxes = screen.getAllByRole("textbox"); 
    //returns an array which is a react element / object
    //whenever multiple items use getAll... method
    //Assertion
    expect(textboxes.length).toBe(2);

});

//Grouping Test Cases
describe("Contact Us page test Case",()=>{
    it("should have heading",()=>{ // naming convention we can use `it` or `test`
        render(<ContactForm/>);
        const result = screen.getByRole("heading");
        expect(result).toBeInTheDocument();
    
    });
    test("should have Button Text in the component",()=>{
        render(<ContactForm/>);
        const result = screen.getByText("Submit");
        expect(result).toBeInTheDocument();
    
    });
});
