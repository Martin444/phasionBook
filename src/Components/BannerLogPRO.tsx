import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import LogoPro from '../Images/logobanwhite.svg'
import BanPro from '../Images/proimg.jpg'
import styled from 'styled-components'
import { useLocation } from 'wouter'

export default function BannerLogPRO() {

    const [, navigate] = useLocation()

    return (
        <BanCntain>
            <div className='register-card'>
                <div className='con'>
                    <div className='btn-container'>
                    <img src={LogoPro}  alt='Logo'/>
                        <h3>VENDE YA</h3>
                        <ButtonPrimary 
                            onclick={() => navigate('/register')}
                            text={'Registrarte'}/>
                    </div>
                </div>
            </div>
            <div className='image-data'>
                <img src={BanPro}  alt='Logo'/>
            </div>
        </BanCntain>
    )
}


const BanCntain = styled.section`
    display: flex;
    height: 70vh;
    align-self: center;
    padding: 0;
    justify-content: center;

    .register-card {
        width:40%;
        height: 100%;
        display: flex;
        text-align: center;
        margin: 0 auto;
        background: #000;
        color: #fff;
    }
    
    .con{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        align-content: center;
    }

    .con img{
        width: 100%;
    }
    
    .btn-container{
        width: 20em;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-self: center;
        align-content: center;
   }
   .con h3{
        font-weight: 300;
   }
   .image-data{
         width:60%;
   }

   .image-data img{
         width: 100%;
         height: 100%;
         object-fit: cover;
   }

   @media screen and (max-width: 700px){
       .image-data{
           width: 10%;
       }

       .register-card{
           width: 90%;
       }

       .btn-container{
            width: 15em;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-self: center;
            align-content: center;
        }
   }
`;
