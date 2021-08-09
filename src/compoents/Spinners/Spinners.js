import React from "react";
import styled from "styled-components";

const WrapSnip = styled.div`
  background-color: transparent;
  background-image: url('data:image/svg+xml,\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 40 40">\
<style> /* ...YO DAWG... */ circle { animation: 4s a infinite linear, 3s o infinite linear; }\
@keyframes a {from{stroke-dasharray:100 0}50%25{stroke-dasharray:0 100}to{stroke-dasharray:100 0}}\
@keyframes o {from{stroke-dashoffset:75}to{stroke-dashoffset:375}}\
<%2Fstyle><circle r="15.9154943092" stroke-width="7" fill="none" stroke="red" />\
</svg>');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 5rem;
  height: 5rem;
`;

const Spinners = () => {
  return <WrapSnip></WrapSnip>;
};

export default Spinners;
