import React from 'react';

const FrequentlyAskedQuestions = () => {
    return (
        <div className='container mt-4'>  
            <h2>Frequently Asked Questions</h2>
            <div className='my-3 p-4 shadow'>
            <h3>How React Works? </h3>
            <p>React is library to create single page app with multiple component. JSX used to html code which is not pure html file then it convert in js object react element by using babel and render in the ui as browser dom. To avoid finding changes or re-render the full browser dom It store a virtual dom which is clean copy of browser dom but created with javascript. When any interaction happend to find out the changes it create another virtual dom and compare with virtual dom copy of browser dom with diff algorithm to compare the changes fast. After find out the changes react only re-reander the components which only need to change not whole page using fiber architecture to update the browser dom effeciently. </p>
            </div>
            <div className='my-3 p-4 shadow'>
            <h3>Difference between Props Vs State </h3>
            <li>Pros is read only data and state can be both read and write</li>
            <li>Props data can not change  and state data could change with in the components.</li>
            <li>Props can pass data one component to another component  and state only hold data for it's own statefull components</li>
            <li>Props use to pass data one component to another component  and state only hold data for it's own statefull components. we can pass state data using props. </li>
            <li>Props use to pass data one component to another component  and state use to re-render the dynamic changes of components. </li>
            </div>
            <div className='my-3 p-4 shadow'>
            <h3>How usestate Works?</h3>
            <p>useState is special type of function which is called hook. it return 2 elelment with an array one is state value another is setState function. when we call setState funtion with an event or some how to change the state value it pass an action with value. if the value is not same as state value then it set the new state value and re-render ui component where state value used. Setstate function work as asynchronously.</p>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestions;