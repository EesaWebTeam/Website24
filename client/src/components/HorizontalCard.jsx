import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function HorizontalCard() {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{display: 'flex', alignItems: 'center', width: '300', maxWidth: 600,padding: 2,margin: 5,}}>
      <CardOverflow
      sx={{
        display: 'flex', // Ensures the image stays horizontally aligned
        alignItems: 'center', // Vertically aligns the image
        padding: 2,
      }}
      >
        <AspectRatio ratio="1" sx={{ width: 90, maxWidth:100,  borderRadius: '50%' }}>
          <img
            src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent
        sx={{
            marginLeft: 0, // Adds spacing between the image and the text content
            flex: 1, // Ensures the text takes the remaining space
          }}
      >
        <Typography textColor="success.plainColor" sx={{ fontWeight: 'md', fontSize: '1.2rem' }}>
          Name
        </Typography>
        <Typography level="body-sm" sx={{marginTop: 1, color: 'text.secondary',}}>
        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph..</Typography>
      </CardContent>      
    </Card>
  );
}
