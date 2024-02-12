import React from "react";
import { useState} from "react";
let Card = (props) => {
    
    return <div className="col">
        <div className= {"card h-100 p-4 "}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button type="button" className="btn btn-primary">Find out more!</button>
            </div>
        </div>
    </div>

}
let Cards = () => {
    return <>
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-4 g-4 cards-general">
                <Card image="https://fastly.picsum.photos/id/798/200/200.jpg?hmac=Y-GVgT90HQZA0AOyRx9gcdj-14IrW6-zz81X6pMlE0k"/>
                <Card image="https://fastly.picsum.photos/id/499/200/200.jpg?hmac=6OuceXs-LrhY-PtwyqBs_bARD8YWZEj9XuZ_ZY894Wc" />
                <Card image="https://fastly.picsum.photos/id/594/200/200.jpg?hmac=owYWnk-K1Yd10c-pUQt8S_02BsTYKsMvSxMWNexClq8" />
                <Card image="https://fastly.picsum.photos/id/572/200/200.jpg?hmac=YFsNUCQc2Dfz_5O0HY8HmDfquz04XrdcpJ0P4Z7plRY" />
            </div>

        </div>
    </>
}
export default Cards