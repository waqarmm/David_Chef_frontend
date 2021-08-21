import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Sheflist from "../../components/ShefCard/index.js";
import Footers from "../../components/Footer/index.js";

import { Layout } from "antd";
import { ArrowRightOutlined, BarsOutlined } from "@ant-design/icons";

import shefFood1 from "../../assects/Shef Card/istockphoto-1301482898-170667a.jpg";
import shefFood2 from "../../assects/Shef Card/Do_o_Kalai_Recipe_-_Meghalaya_Style_Chicken_with_Black_Dal-1.jpg";
import shefFood3 from "../../assects/Shef Card/dal.jpg";
import user1 from "../../assects/Shef Card/1.jpg";
import user2 from "../../assects/Shef Card/2.png";
import user3 from "../../assects/Shef Card/3.png";

import Navbar from "../../components/navbar/index.js";
import GetShef from "../../Actions/Shefs/getShef.js";
import { connect } from "react-redux";
import shefInfo from "../../Apis/ShefInfo.js";

const shefinfo = new shefInfo();

const { Header, Footer, Content } = Layout;

const List = (props) => {

  const [getChef, setChef] = useState([])


  useEffect(() => {
    
   shefinfo
      .getShefs(props)
      .then((response) => {
        console.log(response, "response")
        if (response.status == 200) {
            setChef(response.data);
          console.log(props, "props");
          props.GetShefs(response.data);
        } else {
          props.GetShefs([]);
          // setLoading(true);
        }
      })
      .catch((error) => {
        // setLoading(true);
        // setMessage("ERR_INTERNET_DISCONNECTED");
        console.log(error, 'ACHAA');
      });
  }, []);

  return (
    <>
      <Navbar />

      <Content
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {
          getChef.map((data) => {
         return(
          <Sheflist
          foodimg={shefFood1}
          userimg={user1}
          shafName={data.name}
          shafLocation={data.address}
          shafPhone={data.phone_number}
          cuisineType={data.cuisine_type}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        />
         )
          })
        }
        {/* <Sheflist
          foodimg={shefFood1}
          userimg={user1}
          shafName={"dajfkad"}
          shafLocation={"South India."}
          shafPhone={"+123456789"}
          cuisineType={"Phai"}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        />
        <Sheflist
          foodimg={shefFood2}
          userimg={user2}
          shafName={"Wayne X."}
          shafLocation={"South India."}
          shafPhone={"+123456789"}
          cuisineType={"Phai"}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        />
        <Sheflist
          foodimg={shefFood3}
          userimg={user3}
          shafName={"Wayne X."}
          shafLocation={"South India."}
          shafPhone={"+123456789"}
          cuisineType={"Phai"}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        />
        <Sheflist
          foodimg={shefFood1}
          userimg={user1}
          shafName={"Wayne X."}
          shafLocation={"South India."}
          shafPhone={"+123456789"}
          cuisineType={"Phai"}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        />
        <Sheflist
          foodimg={shefFood1}
          userimg={user1}
          shafName={"Wayne X."}
          shafLocation={"South India."}
          shafPhone={"+123456789"}
          cuisineType={"Phai"}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        />
        <Sheflist
          foodimg={shefFood1}
          userimg={user1}
          shafName={"Wayne X."}
          shafLocation={"South India."}
          shafPhone={"+123456789"}
          cuisineType={"Phai"}
          shefDescription={
            "A Chef or Cook is responsible for using their culinary expertise to create appetizing dishes for diners to enjoy. Their duties include overseeing kitchen staff, tasting dishes before going to customers and restocking food produce as needed."
          }
        /> */}
      </Content>

      {/* **************************** Footer *************************8 */}
      <Footers />
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "data value");

  return {
    GetShefs: state.shefReducers,
  };
};

export default connect(mapStateToProps, {
  GetShef,
})(List);
// export default List;
