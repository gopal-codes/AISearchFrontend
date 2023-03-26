import React from "react";
import {
  Answer,
  Content,
  Icon,
  Input,
  MainContainer,
  Question,
  SearchBoxContainer,
  TopBox,
} from "./SearchStyle";
import { BsSearch, BsFillMicFill } from "react-icons/bs";
import { useState } from "react";

const Search = () => {

  let Qinput ="how is the day boy and  the day boy and  the day boy and the day boy and your friend day ";
  let Ainput ="you are boy and bay of bengal is the day boy and  the day boy and  the day boy and the day boy and your friend day ";

  // initilizing varibles with useState().
  const [searcInput,setSearchInput] = useState("");
  const [question,setQuestion] =useState("");
  const [answer,setAnswer] = useState("");

  const handleinput = (e)=>{
    setSearchInput(e.target.value);
  }

  return (
    <MainContainer>

      <TopBox>
        <Content>
          <Question>
            {Qinput.trim().charAt(0).toUpperCase() + Qinput.slice(1) + "?"}
          </Question>
          <Answer>
            {Ainput.trim().charAt(0).toUpperCase() + Ainput.slice(1) + "?"}
          </Answer>
        </Content>

        <Content>
          <Question>
            {Qinput.trim().charAt(0).toUpperCase() + Qinput.slice(1) + "?"}
          </Question>
          <Answer>
            {Ainput.trim().charAt(0).toUpperCase() + Ainput.slice(1,80) + "."}
          </Answer>
        </Content>
      </TopBox>

      <SearchBoxContainer>
        <Icon>
          <BsFillMicFill />
        </Icon>
        <Input value={searcInput} onChange={(e)=>handleinput(e)} />
        <Icon>
          <BsSearch />
        </Icon>
      </SearchBoxContainer>
    </MainContainer>
  );
};

export default Search;
