import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, Component, useRef } from "react";

const { width: screenWidth } = Dimensions.get("window");

export default function Slide() {
  const [imageList, setimageList] = useState([]);
  const [currentImage, setcurrentImage] = useState(0);

  const stepCarousel = useRef(null);
  useEffect(() => {
    //load data tu server

    const data = [
      {
        image: (
          <ImageBackground
            key="0"
            source={require("../assets/BookAppPic1.png")}
            resizeMode="stretch"
            style={{ width: screenWidth }}
          />
        ),
        type: "png",
        camera: "sony",
      },
      {
        image: (
          <ImageBackground
            key="1"
            source={require("../assets/totoro.png")}
            style={{ width: screenWidth }}
          />
        ),
        type: "png",
        camera: "sony",
      },
      {
        image: (
          <ImageBackground
            key="2"
            source={require("../assets/BookAppPic1.png")}
            style={{ width: screenWidth }}
          />
        ),
        type: "png",
        camera: "sony",
      },
    ];

    // cap nhat len state cua man hinh

    setimageList(data);
  }, []);

  // useEffect(() => {
  //   if (imageList.length > 0 && stepCarousel != null) {
  //     let index = 0;
  //     setInterval(() => {
  //       stepCarousel.current.scrollTo({
  //         x: index * screenWidth,
  //         y: 0,
  //         animated: true,
  //       });
  //       index += 1;
  //       if (index === imageList.length) {
  //         index = 0;
  //       }
  //     }, 3000);
  //   }
  // }, [imageList]);

  const handleScroll = (e) => {
    if (!e) {
      return;
    }
    const { nativeEvent } = e;

    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x) {
        imageIndex = Math.floor(
          (nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth
        );
      }

      setcurrentImage(imageIndex);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ height: 200 }}>
          <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle={{
              width: screenWidth * imageList.length,
              height: 200,
            }}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            // ref={stepCarousel}
            showsHorizontalScrollIndicator={false}
          >
            {imageList.map((e) => e.image)}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

// import { View, Text } from 'react-native'
// import React from 'react'

// export default function slide() {
//   return (
//     <View>
//       <Text>slide</Text>
//     </View>
//   )
// }

//   // import { View,
//   //   Text,
//   //   Image,
//   //   SafeAreaView,
//   //   ScrollView,
//   //   Dimensions,
//   //   ImageBackground
//   // } from 'react-native'
//   // import React, { useState,
//   //   useEffect,
//   //   Component,
//   //   useRef

//   // } from 'react'

//   // const {width:screenWidth} = Dimensions.get('window')

//   // export default function Search() {

//   // const [imageList, setimageList] = useState([])
//   // const [currentImage, setcurrentImage] = useState(0)

//   // const stepCarousel = useRef(null)
//   // useEffect(() => {
//   // //load data tu server

//   // const data=[
//   // {
//   //   image:<ImageBackground

//   //   key='0'
//   //   source={
//   //     require('../assets/BookAppPic1.png')

//   //    }
//   //   resizeMode='stretch'
//   //   style={{ width:screenWidth}}
//   //    />,
//   //    type:'png',
//   //    camera:'sony'
//   // },
//   // {
//   //   image:<ImageBackground
//   //   key='1'

//   //    source={
//   //     require('../assets/totoro.png')
//   //    }
//   //   style={{ width:screenWidth}}

//   //    />,
//   //    type:'png',
//   //    camera:'sony'
//   // },
//   // {
//   //   image:<ImageBackground
//   //   key='2'

//   //   source={
//   //     require('../assets/BookAppPic1.png')
//   //    }
//   //   style={{ width:screenWidth}}

//   //    />,
//   //    type:'png',
//   //    camera:'sony'
//   // },

//   // ]

//   // // cap nhat len state cua man hinh

//   // setimageList(data)

//   // },[])

//   // useEffect (()=>{
//   //   if(imageList.length>0){
//   // let index = 0;
//   // setInterval(()=>{
//   //   stepCarousel.current.scrollTo({x: index * screenWidth, y:0 ,animated:true});
//   // index += 1;
//   // if(index === imageList.length){
//   //   index=0
//   // }

//   // },5000)

//   //   }
//   // },[imageList])

//   // const handleScroll =(e) => {
//   // if(!e){
//   //   return
//   // }
//   // const {nativeEvent} = e

//   // if(nativeEvent && nativeEvent.contentOffset){

//   //   const currentOffset = nativeEvent.contentOffset.x
//   //   let imageIndex = 0
//   //   if(nativeEvent.contentOffset.x){
//   //     imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth/2)/screenWidth)
//   //   }

//   //   setcurrentImage(imageIndex)
//   // }

//   // }

//   //   return (
//   //     <SafeAreaView style ={{flex: 1}}>
//   //       <View style ={{flex: 1,alignItems:'center'}}>
//   //         <View style ={{height:200}}>
//   //      <ScrollView
//   //      horizontal
//   //      pagingEnabled
//   //      contentContainerStyle={{ width: screenWidth * imageList.length, height:200}}
//   //     onScroll={handleScroll}
//   // scrollEventThrottle={16}
//   //     ref={stepCarousel}
//   //     >
//   // {imageList.map(e=>e.image)}

//   //      </ScrollView>
//   //      </View>
//   //      </View>
//   //     </SafeAreaView>
//   //   )
//   // }
