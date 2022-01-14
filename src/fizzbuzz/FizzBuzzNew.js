import { render } from "react-dom";

let m3 = '';
let m5 = '';
const fizzOrBuzz = (val, d1, d2) => {
    m3 = val % d1 === 0 ? `Fizz` : ``;
    m5 = val % d2 === 0 ? `Buzz` : ``;
    return m3 + m5;
}

const FizzBuzzNew = (props) => {
    const { length, div1, div2 } = props;
    let Length_Val = Array(length - 0 + 1).fill().map((_, idx) => 0 + idx);
    Length_Val.shift();
    return (
        <>
            {length !== 0 && (
                Length_Val.map((value) => {
                                return (
                                    <>
                                        <div key={value}>
                                            {fizzOrBuzz(value, div1, div2) || value}
                                        </div>
                                    </>
                                )
                            }                    
                )
            )
            }
        </>
    )
}

export default FizzBuzzNew;
