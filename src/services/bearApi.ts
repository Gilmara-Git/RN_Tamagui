
export const randomBears = [{
    id: Math.random().toString().substring(2),
     description: 'I am a Teddy component managed by ZUSTAND and  styled with TAMAGUI.',
     signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
     imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZGm0-eN8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ogvgbqlwdsvnc6u8iq7a.png'
    
    },
    {id: Math.random().toString().substring(2),
     description: 'I am a Marty component managed by ZUSTAND and  styled with TAMAGUI.',
     signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
     imageUrl: 'https://tkdodo.eu/blog/static/f18038b8566526e3d3dfcf7c3b807b2a/bbe0c/zustand-context.jpg'
    
    },
    {id: Math.random().toString().substring(2),
     description: 'I am a Zem component managed by ZUSTAND and  styled with TAMAGUI.',
     signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
     imageUrl: 'https://tkdodo.eu/blog/static/f18038b8566526e3d3dfcf7c3b807b2a/bbe0c/zustand-context.jpg'
    },
    { id: Math.random().toString().substring(2),
      description: 'I am a Guer component managed by ZUSTAND and  styled with TAMAGUI.',
      signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
      imageUrl: 'https://ridleyorchard.ca/wp-content/uploads/2020/05/mascot-music-269x300.png'
    },
    {id: Math.random().toString().substring(2),
     description: 'I am a Guitto component managed by ZUSTAND and  styled with TAMAGUI.',
    signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
     imageUrl: 'https://ridleyorchard.ca/wp-content/uploads/2020/05/mascot-music-269x300.png'
    
    },
    {id: Math.random().toString().substring(2),
     description: 'I am a Gryas component managed by ZUSTAND and  styled with TAMAGUI.', 
    signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
      imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.9g4fLa6kutjI7-ch2FqDuQHaEK?rs=1&pid=ImgDetMain'
    
    },
    {id: Math.random().toString().substring(2),
    description: 'I am a Gryas component managed by ZUSTAND and  styled with TAMAGUI.',
    signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
    imageUrl: 'https://tkdodo.eu/blog/static/f18038b8566526e3d3dfcf7c3b807b2a/bbe0c/zustand-context.jpg'
    
    },
    {id: Math.random().toString().substring(2),
    description: 'I am a Gryas component managed by ZUSTAND and  styled with TAMAGUI.',
    signature: 'My creator, Gilmara Pimentel is keeping up with new TECHNOLOGIES.',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.9g4fLa6kutjI7-ch2FqDuQHaEK?rs=1&pid=ImgDetMain'
    
    }
    
    ]

    export const fetchBears = ()=>{

   
            const bearQty = randomBears.length;
            const chosenBearIndex = Math.floor(Math.random() * bearQty);
            console.log(chosenBearIndex, 'chosen bear index')
            return randomBears[chosenBearIndex];


    }




