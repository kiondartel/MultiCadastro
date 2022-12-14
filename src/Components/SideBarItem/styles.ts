import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: black; ;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #696969;
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#25cd89" : "#494a7c")};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 35px;
    height: 35px;
    color: white;
  }
`;

export const Point = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border: 3px solid #494a7c;
  background-color: ${(props) => (props.active ? "#25cd89" : "#02044a")};
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -5.8px;
`;
