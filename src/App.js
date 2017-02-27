import React, { Component } from 'react';
import './App.css';
import {PlayerStat} from './PlayerStat';

class App extends Component {

    state = {
        totalReport : "",
        totalReportTrim : "",
        totalCurrentResult : []
    }

    handleSubmitReport = (event) => {
        //var test = "      dfsfsdf";
        this.setState({totalReport: event.target.value});
        //this.setState({totalReportTrim: event.target.value.replace(/ /g,'').replace(/\n/g,"").slice(2)});
        //this.setState({totalReportTrim: event.target.value.replace(/ /g,'').replace(/\n/g,"").split('.').join('')});
        this.setState({totalReportTrim: event.target.value.replace(/ /g,'').replace(/\n/g,"").replace(/\d\./g,"")});
        //test = this.state.totalReport.normalize();
        //test.trim();
        //console.log(test);
        //console.log(event.target.value.charCodeAt(0));



    }

    // function splitValue(value, index) {
    //     return value.substring(0, index) + "," + value.substring(index);
    // }

    handleAnalyzeReport = () => {
        //console.log(this.state.totalReportTrim);
        var test = this.state.totalReportTrim;
        var test2;
        var totalLines = [];
        var count = 0;
        var pos = test.indexOf('%');

        // หาตำแหน่ง % เก็บไว้ใน array totalLines
        while (pos !== -1) {
          count++;
          totalLines.push(pos);
          pos = test.indexOf('%', pos + 1);

        }

        console.log(count); // displays 4
        console.log(totalLines);

        // % ข้างหลังก็ต้องยกเว้น
        // มีหลายบรรทัดค่อยตัด
        if (totalLines.length != 0) {
            console.log("wahoo");
            var i;
            for(i = 0; i < 2; i++){
                console.log("times");
                //this.setState({totalReportTrim: test.slice(0,totalLines[i]) + test.slice(-(test.length - totalLines[i] - 3))});
                test2 = test.slice(0,totalLines[i]) + test.slice(-(test.length - totalLines[i] - 3));
                //this.setState({totalReportTrim
                //test2 = test.slice(0,test.indexOf('%')) + test.slice(-(test.length - test.indexOf('%') - 3));
            }
        }

        // ทำการตัด % ทิ้งก่อนแล้วเลขข้างหลัง % ด้วย
        console.log(this.state.totalReportTrim);
        //console.log(test2);

        //console.log(this.state.totalReportTrim.lastIndexOf('%'));
        //console.log(this.state.totalReportTrim.includes('%'));


        var i = 0;
        var wordCount = 0;
        var currentPlayerName = '';
        var totalPlayerName = [];
        var currentPlayerScore = '';
        var totalPlayerScore = [];
        var checkAdjacentNumber = 0;
        var isFirstTime = true;
        //console.log(test.length);
        //console.log(this.state.totalReportTrim);

        // สามารถแยกตำแหน่งของคนออกมาได้จาก String ที่แปลงเป็น Unicode decimal
        for(i = 0; i < test.length; i++){
            if (test[i].charCodeAt(0) >= 3585 && test[i].charCodeAt(0) <= 3675) {
                wordCount += 1;
                currentPlayerName += test[i];
                //console.log(currentPlayerName);
                //console.log(test[i]);
            }
            else {
                  // นับ Player ถูก
                  if (wordCount > 0) {
                    totalPlayerName.push(currentPlayerName);
                    currentPlayerName = "";
                    wordCount = 0;
                  }

                  if (isFirstTime === true) {
                      checkAdjacentNumber = i-1;
                      isFirstTime = false;
                  }

                  // if (i - checkAdjacentNumber > 1 && isFirstTime == false) {
                  //
                  // }
                  // มั่นใจว่าที่เข้ามาตรงนี้ เป็นเครื่องหมาย ลบ กับ ตัวเลขแน่ๆ
                  // จับเรียงกันเลยจนกว่าตำแหน่งที่เรียงจะต่างกันเกิน 1
                  // จำลองตอนเข้ามาที่ test[8];

                  // ต้องรู้ตาที่แล้ว และ ตานี้
                  //console.log("adj " + checkAdjacentNumber + " i " + i);
                  if (Math.abs(checkAdjacentNumber - i) == 1) {
                    currentPlayerScore += test[i];
                    checkAdjacentNumber += 1;
                  }
                  else {
                    totalPlayerScore.push(currentPlayerScore);
                    currentPlayerScore = "";
                    checkAdjacentNumber = i;
                    currentPlayerScore += test[i];
                  }





                  //console.log(i);

                  // ครั้งแรกตัวที่ 3 เข้ามาเป็น เครื่องหมายลบ
                  // ครั้งที่ 4 เข้ามาเป็นเลข 1
                  // ครั้งที่ 5 เข้ามาเป็นเลข 4
                  // ครั้งที่ 6 เข้ามาเป็นเลข 0
                  // ครั้งที่ 7 เข้ามาเป็น 3-4-5-6
                  //console.log(checkAdjacentNumber);
                  // ถ้าเท่ากับ 1 แปลว่ายังเป็นเลขเดิมอยู่ ถ้าไม่ใช่ถือว่าเลขต่อเนื่อง แล้วถ้า เป็น 0 แปลว่าเป็นเลขครั้งแรก
                  //if (Math.abs(checkAdjacentNumber - i) <= 1) {
                      //console.log(Math.abs(checkAdjacentNumber - i) + " is iteration" + i);
                      //Check  ก่อนว่าเป็นเครื่องหมายลบ หรือเปล่า
                      // if (test[i].charCodeAt(0) == 45) {
                      //   console.log("Negative Value");
                      //   currentPlayerScore += '-';
                      // }
                      // else {
                      //   currentPlayerScore += test[i];
                      //   checkAdjacentNumber = i;
                      // }
                  //}
                  // บันทึกตัวเลขชุดแรกที่เก็บมา
                  //else {
                      //console.log("2 is " + i);
                      //checkAdjacentNumber += 1;
                  //}



                  // ถ้าเลขยังติดกันอยู่แปลว่าเป็นตัวเดียวกัน ถ้าไม่ติดกันแล้ว ก็แสดงว่าคนล่ะตัว


            }
        }
        // รู้ได้เลยว่ามีกี่คนเล่น
        console.log(totalPlayerName);
        //console.log(currentPlayerScore);
        totalPlayerScore.push(currentPlayerScore);
        console.log(totalPlayerScore);


        var currentPlayerIndex = [];
        var totalResult = [];
        var currentPlayerIndexCount = 0;
        var totalCurrentResult = 0;

        function startsWith(wordToCompare) {
            console.log(wordToCompare);
            return function(value,index) {
              if (value == wordToCompare) {
                currentPlayerIndex.push(index);
              }
            }
        }

        // function isPlayer(value,index) {
        //
        //     if (value == "แตง") {
        //       currentPlayerIndex.push(index);
        //     }
        //   }

        //var filtered = totalPlayerName.filter(isPlayer);



        // Filter 1 ครั้งตามจำนวนคนเล่นทั้งหมด (ตี้)
        var filtered = totalPlayerName.filter(startsWith("ตี้"));
        if (currentPlayerIndex != 0) {
            totalResult.push("ตี้");
        }
        console.log(currentPlayerIndex);


        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 2 ครั้งตามจำนวนคนเล่นทั้งหมด (ต้า)
        var filtered = totalPlayerName.filter(startsWith("ต้า"));
        if (currentPlayerIndex != 0) {
            totalResult.push("ต้า");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 3 ครั้งตามจำนวนคนเล่นทั้งหมด (ชัชชล)
        var filtered = totalPlayerName.filter(startsWith("ชัช"));
        if (currentPlayerIndex != 0) {
            totalResult.push("ชัช");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 4 ครั้งตามจำนวนคนเล่นทั้งหมด (บัว)
        var filtered = totalPlayerName.filter(startsWith("บัว"));
        if (currentPlayerIndex != 0) {
            totalResult.push("บัว");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 5 ครั้งตามจำนวนคนเล่นทั้งหมด (จิว)
        var filtered = totalPlayerName.filter(startsWith("จิว"));
        if (currentPlayerIndex != 0) {
            totalResult.push("จิว");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 6 ครั้งตามจำนวนคนเล่นทั้งหมด (นน)
        var filtered = totalPlayerName.filter(startsWith("นน"));
        if (currentPlayerIndex != 0) {
            totalResult.push("นน");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 7 ครั้งตามจำนวนคนเล่นทั้งหมด (แตง)
        var filtered = totalPlayerName.filter(startsWith("แตง"));
        if (currentPlayerIndex != 0) {
            totalResult.push("แตง");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 8 ครั้งตามจำนวนคนเล่นทั้งหมด (แตง)
        var filtered = totalPlayerName.filter(startsWith("แตง"));
        if (currentPlayerIndex != 0) {
            totalResult.push("ฝ้าย");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // Filter 9 ครั้งตามจำนวนคนเล่นทั้งหมด (แตง)
        var filtered = totalPlayerName.filter(startsWith("แตง"));
        if (currentPlayerIndex != 0) {
            totalResult.push("บอย");
        }
        console.log(currentPlayerIndex);

        // เทียบว่าตรงตำแหน่งไหนบ้าง
        for (var i = 0; i < totalPlayerScore.length; i++) {
          if (currentPlayerIndex[currentPlayerIndexCount] === i) {
              currentPlayerIndexCount += 1;
              totalCurrentResult += parseInt(totalPlayerScore[i]);
              console.log(i);
          }
        }
        totalResult.push(totalCurrentResult);

        // ClerData
        currentPlayerIndexCount = 0;
        totalCurrentResult = 0;
        currentPlayerIndex = [];

        // จบโปรแกรม
        console.log(totalResult);
        console.log(totalCurrentResult);

        this.setState({totalCurrentResult: totalResult});

        // test


        // var testtest = [];
        // function isBigEnough(value,index) {
        //     console.log(index);
        //     if (value >= 10) {
        //       testtest.push(index);
        //     }
        //     return value >= 10;
        //   }
        //
        // var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
        // filtered is [12, 130, 44]
        // console.log(filtered);
        // console.log(testtest);



        // console.log("ก".charCodeAt(0));
        // console.log("ข".charCodeAt(0));
        // console.log("ค".charCodeAt(0));
        // console.log("ง".charCodeAt(0));
        // console.log("อ".charCodeAt(0));
        // console.log("ฮ".charCodeAt(0));
        // console.log("ต".charCodeAt(0));
        // console.log("้".charCodeAt(0));
        // console.log("า".charCodeAt(0));
        // console.log("-".charCodeAt(0));
        // console.log("0".charCodeAt(0));
        // console.log("1".charCodeAt(0));
        // console.log("2".charCodeAt(0));
        // console.log("3".charCodeAt(0));
        // console.log("4".charCodeAt(0));
        // console.log("5".charCodeAt(0));
        // console.log("6".charCodeAt(0));
        // console.log("7".charCodeAt(0));
        // console.log("8".charCodeAt(0));
        // console.log("9".charCodeAt(0));



    }



  render() {

    return (
        <section className="hero is-info is-large">

     <div className="hero-head">
       <header className="nav">
         <div className="container">
           <div className="nav-left">
             <a className="nav-item">
               Dummy Yummy - Burger & Milkshake
             </a>
           </div>
           <span className="nav-toggle">
             <span></span>
             <span></span>
             <span></span>
           </span>
           <div className="nav-right nav-menu">
             <a className="nav-item is-active">
               Home
             </a>
             <a className="nav-item">
               Examples
             </a>
             <a className="nav-item">
               Documentation
             </a>
             <span className="nav-item">
               <a className="button is-info is-inverted">
                 <span className="icon">
                   <i className="fa fa-github"></i>
                 </span>
                 <span>Download</span>
               </a>
             </span>
           </div>
         </div>
       </header>
     </div>


     <div className="hero-body">

          <div className="columns">
            <div className="column">

              <label className="label">เงินจากที่ตี้คิด ::</label>
                <p className="control">
                  <textarea className="textarea" placeholder="Textarea" value={this.state.totalReport} onChange={this.handleSubmitReport}></textarea>
                </p>
                <button className="button is-primary" onClick={this.handleAnalyzeReport}>Submit</button>

                <label className="label">ผลจากการคำนวน</label>
                <p className="control">
                    <input className="input" type="text" placeholder="Text input" value={this.state.totalCurrentResult}/>
                </p>



            </div>


          </div>

     </div>


     <div className="hero-foot">
       <nav className="tabs is-boxed is-fullwidth">
         <div className="container">
           <ul>
             <li className="is-active"><a>Overview</a></li>
             <li><a>Modifiers</a></li>
             <li><a>Grid</a></li>
             <li><a>Elements</a></li>
             <li><a>Components</a></li>
             <li><a>Layout</a></li>
           </ul>
         </div>
       </nav>
     </div>
   </section>
    );
  }
}

export default App;
