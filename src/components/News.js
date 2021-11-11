import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner   from './Spinner';
import PropTypes from 'prop-types'
import breakingNews from './breakingNews.jpg'
let count=0;
export default class News extends Component {
  
    static defaultsProps={
        country:'in',
        pageSize:9,
        category:'general',
        api:"d83d3319d9c540b3bf5a492670aa841a"
    }
    
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
        useApi:PropTypes.string,
    }
    constructor(){
        super();
        
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
    }

    async componentDidMount()
    {
        document.querySelector('title').text=`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}-NewsSpider`
        this.props.setProgress(10)
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.useApi}&pageSize=${this.props.pageSize}`
        this.props.setProgress(20)
        let data= await fetch(url)
        this.props.setProgress(40)
        let response=await data.json()
        this.props.setProgress(80)
        console.log(response)
        this.setState({
            articles:response.articles,
            totalResults:response.totalResults,
            loading:false})
        this.props.setProgress(100)
        
    }

    
    fetchMoreData = async () => {
        this.setState({
            //loading:true,
            page:this.state.page+1
        })
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.useApi}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data= await fetch(url)
        let response=await data.json()
        //this.page=this.page-1
        // this.setState({articles:response.articles})
        this.setState(
            {
                //page:this.state.page-1,
                articles:this.state.articles.concat(response.articles),
                loading:false
            }
        )
        
 
      };


    render() {
        return (
            
            <div className="container my-3">
                <div className="heading my-3 mx-4" ><h1 className="col-md-6" >Top Headlines</h1><h3 className="my-2" style={{textAlign:'right'}}>{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h3></div>
                {(this.state.loading) &&<Spinner  margin="200px"/>}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          
          hasMore={this.state.totalResults-this.state.articles.length>2}
          loader={<Spinner  margin="10px"/>}
        >
                <div className="row my-3 mx-3">
                
                {!(this.state.loading) && this.state.articles.map((element)=>{
                   if(element===undefined)
                   {
                       return
                   }
                    if(!element.urlToImage || element.urlToImage===undefined)
                    {
                        element.urlToImage=breakingNews
                    }

                    if(element.description)
                    {
                        if(element.description.length>88)
                        {
                            element.description=element.description.substring(0,88)+"..."                           
                        }
                        
                    }
                    else
                    {
                        element.description=""
                    }

                    if(element.title)
                    {
                        if(element.title.length>60)
                        {
                            element.title=element.title.substring(0,60)+"..."
                            
                        }
                    }
                    else
                    {element.title="Breaking News"}
                    count++;
                    return(
                        <div className="col-md-4 my-2" key={element.urlToImage+count}>
                            <NewsItem title={element.title} description={element.description} siteLink={element.url}  imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source}/>
                        </div>
                    )
                })}
                 </div>
                </InfiniteScroll>
               
              

                
                
                
            </div>
        )
    }
}
