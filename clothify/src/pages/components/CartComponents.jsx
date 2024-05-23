import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import min from '../../assets/MinusLight.png'
import max from '../../assets/PlusLight.png'
import bin from '../../assets/Delete.png'
import cartImg from '../../assets/im.png'



const CartComponents = (props) => {
    const useNav=useNavigate()


    // function subItems(e){
    //     const url=`http://localhost:8080/cart/update/sub/${props.id}` // api fix
    //     if(props.product.qty>1){
    //     axios.put(url).then((res)=>{
    //         console.log(res.data)
    //         props.reload();
    //     })
    //     }else{
    //         alert("if you want to remove click the bin icon");
    //     }
    // }


    function addItem(e) {
        const url=`http://localhost:8080/cart/update/add/${props.item.id}`
        console.log(props.item.qty);
        console.log(props.item.stock.qty);

        axios.put(url).then((res)=>{
            if (props.item.qty>props.item.stock.qty) {
                    alert("out of stock")
            }else{
                axios.put(url).then(()=>{
                    
                })
            }

        })
    }
    function subItems(e) {
        const url=`http://localhost:8080/cart/update/sub/${props.item.id}`
            if (props.item.qty>1) {
                axios.put(url).then((res)=>{
                    
                })
            }else{
                alert("no stock use bin to remove")
            }
    }

    function handleDelete(e) {
        const url =`http://localhost:8080/cart/delete/${props.item.id}`
        axios.delete(url)
        .then((res)=>{
            console.log(res.data);
        }).catch(()=>{
            useNav("/error404")
        })  
    }
    return (
        <div className='flex mb-5 dark:bg-black font-mulish'>
            <div className=' ml-4 w-[30%]'>
                <img src={cartImg} alt="" />
            </div>
            <div className='flex flex-col pr-[20%] '>
                <div className='  flex'>
                    <h2 className='ml-3'>{props.item.stock.product.name}</h2>
                    <span className=' pr-5 mr-0 ml-[65%]'>{`${props.item.productTot}.00`}</span>
                </div>
                <span className='ml-[10%] mt-3'>{`${props.item.stock.size} / ${props.item.stock.color}`}</span>
                <div className='flex flex-row size-[15%] ml-[10%] mt-4'>
                    <img src={min} onClick={(e)=>subItems(e)} alt='add more button'className='w-6 size-8 object-cover' />
                    <p className='px-10 mx-2 mb-3 pt  bg-black rounded-sm text-white'>{props.item.qty}</p>
                    <img src={max} alt="reduce button" onClick={(e)=>addItem(e)} className='w-6 size-8 object-cover' />
                    <img className='h-7 mx-3' src={bin} onClick={(e)=>handleDelete(e)} alt='bin'/>
                </div>
            </div>
        </div>
    )
}
export default CartComponents


