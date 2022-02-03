import React, {useState} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import TagIcon from '@mui/icons-material/Tag';
import Data from './Data'
import Feed from './Feed'

function Home() {
  const [key,setKey] = useState('one')

  return(
    <>
      <Stack className="social-div" direction="row" spacing={1}>
        <IconButton aria-label="Social" onClick={()=> setKey('one')} className="allSoc">
          <TagIcon className="icon-soci"/>
        </IconButton>
        <IconButton aria-label="facebook" onClick={()=> setKey('three')} className="face">
          <FacebookIcon className="icon-soci"/>
        </IconButton>
        <IconButton aria-label="instagran" onClick={()=> setKey('two')} className="insta">
          <InstagramIcon className="icon-soci"/>
        </IconButton>
        <IconButton aria-label="youtube" onClick={()=> setKey('four')} className="you">
          <YouTubeIcon className="icon-soci"/>
        </IconButton>
        <IconButton aria-label="pinterest" onClick={()=> setKey('five')} className="pin">
          <PinterestIcon className="icon-soci"/>
        </IconButton>
      </Stack>
      <div>
        {key === "one" && <Feed data={Data} feedIndex={0} />}
        {key === "two" && <Feed data={Data} feedIndex={1} />}
        {key === "three" && <Feed data={Data} feedIndex={2} />}
        {key === "four" && <Feed data={Data} feedIndex={3} />}
        {key === "five" && <Feed data={Data} feedIndex={4} />}
      </div>
      
    </>
  )
}

export default Home;

