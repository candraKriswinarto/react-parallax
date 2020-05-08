import React from 'react';
import { Parallax } from 'react-parallax';

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax bgImage={ image1 } strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>HTML inside the parallax</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={ image2 } blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Dinamic blur</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={ image3 } strength={-200} >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Reverse direction</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax 
        bgImage={ image4 }
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Render prop</div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default App;
