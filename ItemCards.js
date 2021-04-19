import React, { Component } from 'react'
import ApiService from '../services/ApiService';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class ItemCards extends Component {

  constructor(props) {
      super(props)
      this.state = {
          jewellries: [],
         
      }
  }

  componentDidMount() {
      ApiService.fetchJewellries()
          .then((res) => {
              this.setState({jewellries: res.data})
              console.log(res.data);
          });
  }


  render() {
    const {jewellries} = this.state;
    return (
      <div>
        { jewellries.length != 0 ?(jewellries.map(row => (
                <Card >
			      <CardHeader title={row.name}/>
			      <CardMedia title="Jewellry"/>
			      <img src={row.image} alt= "jewells" width="200" height="200"/>		
			      <CardContent>
				<Typography title={row.description} />

			      </CardContent>
			      <CardActions disableSpacing>	
				<Button size="small" class="btn" variant="contained">More & Buy</Button>
				</CardActions>
			    </Card>
                ))):null}
      </div>
              );
            }
        
        }
        
        export default ItemCards;
