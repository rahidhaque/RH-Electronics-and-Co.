import React from 'react';

const Blogs = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            <div tabindex="0" className="collapse border border-base-300 bg-base-100 rounded-box max-w-lg my-5">
                <div className="collapse-title text-xl font-medium">
                    1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>We can improve the performance of React Application in various ways which are mentioned below: <br />
                        (i)	While passing key as props index number should not be used as it might show incorrect data from fetching. <br />
                        (ii)	Props must not be spread into a DOM element as it adds unknown HTML attribute <br />
                        (iii)	Reducing the size of the images so that it loads faster while browsing <br />
                        (iv)	Don’t repeat the codes in the application like creating useHooks so that it can’t be repeat frequently.
                    </p>
                </div>
            </div>
            <div tabindex="1" className="collapse border border-base-300 bg-base-100 rounded-box max-w-lg my-5">
                <div className="collapse-title text-xl font-medium">
                    2.	What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>To manage states in react application we use: (i)useState() (ii) useReducer(). UseState can accept takes two parameters one is for variable to store value and setting the value when any state change occurs. Inside it can also take any initial value. Use reducer is similar to usestate() but instead of initial value it accepts a reducer. </p>
                </div>
            </div>
            <div tabindex="2" className="collapse border border-base-300 bg-base-100 rounded-box max-w-lg my-5">
                <div className="collapse-title text-xl font-medium">
                    3.	Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
                </div>
                <div className="collapse-content">
                    <p>We can’t set the value of products as constant or variable directly. We use state to consider the user interactions. Suppose in this case setProducts is normally when there is a change in state due to user interactions which is not possible by decalaring  products = [..].   </p>
                </div>
            </div>
            <div tabindex="3" className="collapse border border-base-300 bg-base-100 rounded-box max-w-lg my-5">
                <div className="collapse-title text-xl font-medium">
                    4.	You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p>Step 1: const [searchResult, setSearchResult]= useState(products); <br />
                        Step 2: Declare an input field <br />
                        Step 3: const searchText = event.target.value.toLowerCase(); <br />
                    Step 4: const match = products.filter(product => product.name.toLowerCase().includes(searchText)); <br />
                        Step 5: setSearchResult(match);
                    </p>
                </div>
            </div>
            <div tabindex="4" className="collapse border border-base-300 bg-base-100 rounded-box max-w-lg my-5">
                <div className="collapse-title text-xl font-medium">
                    5.	What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit Test is a software testing method where individual components in our app is tested. It follows SDLC (Software Development Life Cycle) and it is a type of whitebox testing that performed by QA tester or sometimes by developer. Unit test greatly helps to fix problems or bugs in the application and save costs. It helps the developers to identify any error during early development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;