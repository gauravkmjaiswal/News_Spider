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
        category:'news',
        api:"d83d3319d9c540b3bf5a492670aa841"
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
        // let url2=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&topic=${this.props.category}&apiKey=${this.props.useApi}&pageSize=${this.props.pageSize}`
        // let url=``
        
        let data=await fetch(`https://free-news.p.rapidapi.com/v1/search?lang=en&q=${this.props.category}&page=${this.state.page}&page_size=${this.props.pageSize}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "d966ca72e2msh74c212375cf5e08p1ab4d4jsn5daae3919c09"
            }
        })
        let response=await data.json();
       // let response=await apiCall(url);
        console.log(response)
        this.setState({
            articles:response.articles,
            totalResults:response.total_pages,
            loading:false})
        this.props.setProgress(100)
        
    }

    
    fetchMoreData = async () => {
        this.setState({
            //loading:true,
            page:this.state.page+1
        })
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.useApi}&page=${this.state.page}&page_size=${this.props.pageSize}`
       // let data= await fetch(url)
        
console.log("well you are here")

        let data=await fetch(`https://free-news.p.rapidapi.com/v1/search?lang=en&q=${this.props.category}&page=${this.state.page}&page_size=${this.props.pageSize}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "d966ca72e2msh74c212375cf5e08p1ab4d4jsn5daae3919c09"
            }
        })
        let response=await data.json()
        console.log('ok'+response)
        //this.page=this.page-1
        // this.setState({articles:response.articles})
        this.setState(
            {
                //page:this.state.page-1,
                articles:this.state.articles.concat(response.articles),
                
                loading:false
            }
           
        )
        console.log(response.articles.length)
        
 
      };


    render() {
        return (
            
            <div className="container my-3">
                <div className="heading my-3 mx-4" ><h1 className="col-md-6" >Top Headlines</h1><h3 className="my-2" style={{textAlign:'right'}}>{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}</h3></div>
                {(this.state.loading) &&<Spinner  margin="200px"/>}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
        //   console.log('hello')
          
          hasMore={this.state.totalResults-this.state.articles.length>2}
          loader={<Spinner  margin="10px"/>}
        >
                <div className="row my-3 mx-3">
                
                {!(this.state.loading) && this.state.articles.map((element)=>{
                   if(element===undefined)
                   {
                       return
                   }
                    if(!element.media || element.media===undefined)
                    {
                        element.media=breakingNews
                    }

                    if(element.summary)
                    {
                        if(element.summary.length>88)
                        {
                            element.summary=element.summary.substring(0,88)+"..."                           
                        }
                        
                    }
                    else
                    {
                        element.summary=""
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
                        <div className="col-md-4 my-2" key={element.media+count}>
                            <NewsItem title={element.title} description={element.summary} siteLink={element.link}  imageUrl={element.media} author={element.author} date={element.published_date} source={element.clean_url}/>
                        </div>
                    )
                })}
                 </div>
                </InfiniteScroll>
               
              

                
                
                
            </div>
        )
    }
}
