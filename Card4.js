/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { styled } from '@mui/material/styles';
import useCard4 from './useCard4';
 
const TypeQuest = styled("div")(({ theme }) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: theme.customShadows["Elevation"]["6"].boxShadow,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: `390px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
}));
  
const ImageFrame = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `10px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Image = styled("div", {
    shouldForwardProp: prop => !["data"].includes(prop.toString())
  })(({ data }) =>({  
  backgroundImage: `url(${ImageImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  alignSelf: `stretch`,  
  height: `251px`,  
  margin: `0px`,  
  overflow: `hidden`,  
  backgroundImage: data.bgImage,  
}));
  
const Content = styled("div", {
    shouldForwardProp: prop => !["props", "data", "fns"].includes(prop.toString())
  })(({ props, data, fns }) =>({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `14px 40px 24px 20px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
  backgroundColor: props.bgColor,  
  backgroundImage: data.bgImage,  
  height: "100vh",  
  width: data.width,  
  overflow: fns.getScroll(),  
  cursor: `pointer`,  
}));
  
const Details = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Title = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `700`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `underline`,  
  textTransform: `none`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
}));
  
const Details1 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: theme.typography["Typography"]["Body 1"].fontStyle,  
  fontFamily: theme.typography["Typography"]["Body 1"].fontFamily,  
  fontWeight: theme.typography["Typography"]["Body 1"].fontWeight,  
  fontSize: theme.typography["Typography"]["Body 1"].fontSize,  
  letterSpacing: theme.typography["Typography"]["Body 1"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["Body 1"].textDecoration,  
  lineHeight: theme.typography["Typography"]["Body 1"].lineHeight,  
  textTransform: theme.typography["Typography"]["Body 1"].textTransform,  
  alignSelf: `stretch`,  
  margin: `8px 0px 0px 0px`,  
}));
 
function Card4(props) {
  const {data, fns} = useCard4();
  return (
    <TypeQuest >
       <ImageFrame >
         <Image data={data} >
         </Image>
       </ImageFrame>
       <Content onClick={fns.handleClick} props={props} data={data} fns={fns} >
         <Details >
           <Title >
             {`15 Summer drinks to make while hosting friends`}
               </Title>
           <Details1 >
             {`Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.`}
               </Details1>
         </Details>
       </Content>
     </TypeQuest>
   );
}

export default Card4;
