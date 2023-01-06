import React, { Component } from 'react'
import breakingNews from './breakingNews.jpg'
export default class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,siteLink,author,date,source}=this.props
        return (
            <div>
               <div className="card " style={{borderWidth:0}} >
               <span style={{float:"right"}}className="badge  bg-warning text-dark" style={{borderTopLeftRadius:"50rem",borderTopRightRadius:"50rem"}}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text" ><small className="text-muted">By {!author?"UnKnown":author} on {new Date(date).toLocaleDateString()}</small>
                        
                        </p>
                        <a href={siteLink} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
