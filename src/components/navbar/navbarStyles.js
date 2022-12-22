import styled from "styled-components";


export const ContainerNavbar = styled.div`
    .border {
    border: 1px solid red;
    }
    
    width: 100%;
    height: 150px;

    background-color: #0c0c0c;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Goldman', cursive;

`

export const Image = styled.img`
    width: 300px;
    margin-left: 20px;
`

export const Input = styled.input`
    width: 500px;
    height: 50px;

    padding-left: 20px;
    
    font-size: 17px;
    font-family: 'Goldman', cursive;

    border-radius: 12px;

    outline: none;
    border: none;

    -webkit-box-shadow: 6px 7px 18px 0px rgba(8,201,82,0.76);
    -moz-box-shadow: 6px 7px 18px 0px rgba(8,201,82,0.76);
    box-shadow: 6px 7px 18px 0px rgba(8,201,82,0.76);
`


export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 10px;
`

export const Link = styled.li`
    padding: 20px;
    list-style: none;
    cursor: pointer;
    border: none;
    transition: 1s all;

    &:hover {
        border-radius: 5px;
        border: 1px solid rgba(8,201,82,0.76);
    }

    
    a {
        color: #fff;
        font-size: 20px;
        text-decoration: none;
        

        &:active {
            opacity:  0.6;
        }

        padding: 20px;

    }
`