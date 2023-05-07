import { React } from "react";
import './App.css';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import logo from './images/logo.png'
import photo1 from './images/photo1.png'
import photo2 from './images/photo2.png'

function FAQ() {
  const [product, setProduct] = useState([]);
  const [viewer1, setViewer1] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const [viewer2, setViewer2] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [index, setIndex] = useState(0);
  const [viewer4, setViewer4] = useState(false);
  let [idCount, setIdCount] = useState(4);
  useEffect(() => {
    getAllProducts();
  }, [checked]);
  const [addNewProduct, setAddNewProduct] = useState({
    _id: 4,
    question: "",
    answer: "TBD",
    keywords: { keyword0: "where", keyword1: "when", keyword2: "how" },
  });
  const showAllItems = product.map((el) => (
    <div id='questionCard' key={el._id}>
      <div class='question'>
        Question: {el.question} <br />
      </div>
      <div class='answer'>
        {el.answer} <br />
        <br />
      </div>
    </div>
  ));
  function getAllProducts() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
    setViewer1(!viewer1);
  }
  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "_id") {
      setAddNewProduct({ ...addNewProduct, _id: value });
    } else if (evt.target.name === "question") {
      setAddNewProduct({ ...addNewProduct, question: value });
    } else if (evt.target.name === "answer") {
      setAddNewProduct({ ...addNewProduct, answer: value });
    } else if (evt.target.name === "keyword0") {
      setAddNewProduct({ ...addNewProduct, keyword0: value });
    } else if (evt.target.name === "keyword1") {
      setAddNewProduct({ ...addNewProduct, keyword1: value });
    } else if (evt.target.name === "keyword2") {
      setAddNewProduct({ ...addNewProduct, keyword2: value });
    }
  }
  function handleOnSubmit(e) {
    console.log("before " + idCount)
    setIdCount(idCount++)
    console.log("after " + idCount)
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://localhost:4000/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post a new question completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }
  function getOneByOneProductNext() {
    if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }
  function getOneByOneProductPrev() {
    if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }
  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:4000/delete/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
    setChecked(!checked);
  }
  function getOneProduct(keyword) {
    console.log(keyword);
    if (keyword != null) {
      fetch("http://localhost:4000/" + keyword)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one Question :", keyword);
          console.log(data);
          const dataArr = [];
          dataArr.push(data);
          setOneProduct(dataArr);
        });
      setViewer2(!viewer2);
    } else {
      getAllProducts();
      showAllItems();
    }
  }
  const showOneItem = oneProduct.map((el) => (
    <div id='questionCard' key={el._id}>
      <div class='question'>
        Question: {el.question} <br />
      </div>
      <div class='answer'>
        Answer: {el.answer} <br />
      </div>
    </div>
  ));
  return (
    <html>
      <header id="nav">
        <img src={logo} alt="logo" id="logo"></img>
        <p id="headTitle">Al Exito Collegiate</p>
      </header>
      <body>
        <div id="images">
          <img src={photo1} alt='photo1' id='photo1'></img>
          <img src={photo2} alt='photo2' id='photo2'></img>
        </div>
        <div>
          <h1 id="faqTitle">FAQ</h1>
        </div>
        <hr></hr>
        <div id='main'>
          <div id='search'>
            <h1>Search By Keywords:</h1>
            <input type="text" id="message" name="message" placeholder="Seach" onChange={(e) => getOneProduct(e.target.value)} />
            {viewer2 && <div>{showOneItem}</div>}
          </div>
          <div id="allQuestions">
            <button class="button" id='allButton' onClick={() => getAllProducts()}>Show All questions</button>
            {viewer1 && <div><h2>Questions:</h2> {showAllItems}</div>}
          </div>
        </div>
        <hr></hr>
        <div id='post'>
          <h2 id='askTitle'>Ask a Question!</h2>
          <div id='ask'>
            <form action="">
              <div id='idstyle'>
                {/* <p>{id}</p> */}
                <input type="hidden" placeholder="ID" name="_id" value={addNewProduct._id} onChange={handleChange} />
              </div>
              <div id='questionstyle'>
                <textarea placeholder="Question?" name="question" id="questionInput" value={addNewProduct.question} onChange={handleChange} />
              </div>
              <div id='answerstyle'>
                <input type="hidden" placeholder="Answer." name="answer" value={addNewProduct.answer} onChange={handleChange} />
              </div>
              {/* <h3>Keywords?:</h3>
            <div class='col-12'>
            <input type="text" name="keyword0" value={addNewProduct.keywords.keyword0} onChange={handleChange} />
            </div>
            <div class='col-12'>
            <input type="text" name="keyword1" value={addNewProduct.keywords.keyword1} onChange={handleChange} />
            </div>
            <div class='col-12'>
            <input type="text" name="keyword2" value={addNewProduct.keywords.keyword2} onChange={handleChange} />
            </div> */}
              <p class="textMuted">*Your question will be sent to Al Exito Collegiate<br /> and added to the FAQ which will be answered eventually*</p>
              <button type="submit" class='button' onClick={handleOnSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3>Delete a question</h3>
          <input type="checkbox" id="acceptdelete" name="acceptdelete" checked={checked}
            onChange={(e) => setChecked(!checked)} />
          <button onClick={() => getOneByOneProductPrev()}>Prev</button>
          <button onClick={() => getOneByOneProductNext()}>Next</button>
          <button onClick={() => deleteOneProduct(product[index]._id)}>Delete</button>
          {checked && (
            <div key={product[index]._id}>
              <div>
                Id:{product[index]._id} <br />
                Question: {product[index].question} <br />
                Answer: {product[index].answer} <br />
              </div>
            </div>
          )}
        </div>
        <div>
          <h3>EDIT a question</h3>
          <input type="checkbox" id="acceptdelete" name="acceptdelete" checked={checked2}
            onChange={(e) => setChecked2(!checked2)} />
          <button onClick={() => getOneByOneProductPrev()}>Prev</button>
          <button onClick={() => getOneByOneProductNext()}>Next</button>
          <button onClick={() => deleteOneProduct(product[index]._id)}>Edit</button>
          {checked2 && (
            <div key={product[index]._id}>
              <div>
                Id:{product[index]._id} <br />
                Question: {product[index].question} <br />
                Answer: {product[index].answer} <br />
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}

export default FAQ;
