import React from 'react'
import { increaseCounter, decreaseCounter  } from '../../counterAction'
import { useSelector, useDispatch } from 'react-redux'

const OurCounter = () => {
    const myState = useSelector( (state) => state.handleMyCounter)
    const dispatch = useDispatch();
    return(
        <div>
<div class="jumbotron">
                <h1 class="display-4">Our Couter App</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                        <a onClick={ () => dispatch(decreaseCounter()) } class="btn btn-primary btn-lg" href="#" role="button">Minus</a>
                        <input type='text' value={myState}/>
                        <a onClick={ () => dispatch({type:"INCREASE"}) } class="btn btn-success btn-lg" href="#" role="button">Plus </a>
                    </p>
            </div>


            </div>
    )
}

export default OurCounter