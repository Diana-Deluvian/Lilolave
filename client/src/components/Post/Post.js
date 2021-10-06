import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
  } from 'react-router-dom'

import './Post.css';

const Post = ( {posts} ) => {
    let { postId }  = useParams();
    let post = posts.find(post => ':' + post.id == postId);
    console.log(post, postId)
    /*let post = {
      name: "What love is, What love could be",
      content: ["While I liked the general direction the book took and nodded along to a lot of the conclusions Jenkins reaches, I still found the work lacking in several notable ways. The explanation can be as simple as that she wanted to make the book accessible (and not too bold) to a large, primarily monogamous, heterosexual, and allonormative audience, but that does not change the fact that a lot of the book is rather meek.",
      
      "There isn't really a discussion on who the groups practicing polyamory are (and even more importantly, any conclusions you could draw from that that would definitely strengthen her main thesis of amatonormativity as part of the nuclear family propagator), check and discuss any patterns there, the uncritical use of the term \"ethical non-monogamy\", baffled me. I am always disappointed when I see it propagated by polyam people, but a person writing seriously on the topic, especially in defense* of polyamory should expunge it from their vocabulary, or even better, largely discuss the implicit questioning of the ethics of polyamorous people.",
      "In fact, the very act of pretending that gay love and relations are solved just because some governments have made marriage legal is wrong, in the nicest terms. And this comment really sets the tone for the work for me - criticism of a lot of \"big philosophers\", but inevitably still leaning on them. A misunderstanding of what social constructs really are - there is a claim that they cannot themselves produce profound biological changes in us, when they most definitely can. That is trivial to prove.",
      
      "I want to end my review with a quote from the book that I think sums up my problems with it: \"Many well-adjusted, happy, productive, and socially valuable people are single and haven’t been in love;\""],
      category: "Reviews",
      date: "01.01.20",
      keywords: ["love", "polyamory", "philosophy"],
      additionalResources: ["Resource1", "resource2"],
      references:["reference1", "reference2"],
      additionalInfos: ["additional info1", "additional info2"],
      personalNotes: ["Bad impression on the prologue, author comes across as a liberal, and there's a presumption that gay people are already broadly accepted (especially in mainstream media culture). Absolutely no mention of trans people so far, or how they might be relevant here.",
                      "Comparisson between the mystique of love to the 'feminine mystique'",
                    "The main theory the author presents is that love has a dual form - informed both by cultural and biological factors. She seeks to mainly base her analysis on critical thinking and the like (analytical metaphysics)",
                  "According to biology, love is driven by chemicals in the brain, and has it's origin in evolution. That much might be true, but the interpretation offered by a lot of scientists is highly biased, has problems in the form of gathering data, relies on assumptions of testing (just because a part of the brain is active doesn't tell us the full picture), and does not really incorporate how the environment might be influencing people.",
                "Second chapter opens with a potentially racist remark.",
              "There is a poor elaboration on what a social construct is, and is explained by naming trans people, and drawing a comparison from them to romantic love.",
            "Hand-waving away the racism of the late 20th century.",
          "Good observation on how what is perceived to be a failure (e.g. a relationship not working out) goes into its construction.",
        "Current analysis is that her line of thinking is good, especially as an outsider to monogamous love, but it needs a lot of expanding to actually account for different ways of being, and a deeper analysis of sex, gender, race, and the like.",
      `"Many well-adjusted, happy, productive, and socially valuable people are single and haven’t been in love;"`,
    `A decent elaboration on how the history of love philosophy has been too white and male, and how this has influenced it as heterosexism and amatonormative, as well as prefering the monogamous. She brings up some examples of important philosophical figures and how they might have been sexist (and other), but it doesn't go far enough, she makes a lot of the same mistakes herself, and there's a perpetual irony in brandishing her erudition into analytical philosophy as her strenght.
    The author doesn't seem to quite well what a social construct is.`,
  `I generally like her analysis, although it often feels a bit 'naive'. The whole construction of "is it biology or a social construct" feels a bit forced, which might just be my own perspective of being so detached from a lot of society.
  She needs a bit more queernes in her life, imo,`,
`Her analysis remains shallow and rather uninspired. A weird argument against the redistribution of wealth is thrown in, and it's rather bad, relying exclusively on the reader identifying with individualistic notions of state-given rights.`,
`Makes a great point on how the acceptence of things often depends on how destabilizing they are, and why same-sex marriage was protested, and what happened when it was accepted. (normalization of amatonormativity and monogamy) 
`,
`The presumption of love as the force of ultimate good is kinda not questioned. "genuine love", to dismiss all the potential negative consequences of its hyper-focus is already the status quo.`]
    }*/

    return(
      <div className="postContainer">
          <h1 className="postHeader">{post.title}</h1>
          {post.contents.map(content => <p className="postContent">{content}</p>)}
          <p className="postDate">Posted on: {post.date}</p>
          <p className="postCategory">Category: {post.category}</p>
          <p className="postKeywords">Keywords: {post.keywords.map(keyword => <a href={`/search/${keyword}`}>{keyword}, </a>)}</p>
          
          <ul className="postAdditionalInfo">Additional Information:
             {post.additionalInfos.map(info => <li>{info}</li>)}</ul>
          <ol className="postReferences">References:
             {post.references.map(reference => <li>{reference}</li>)}</ol>
          <p className="postPersonalNotes">Personal Notes:</p>
          {post.personalNotes.map(personalNotes => <p className="postPersonalNotes">{personalNotes}</p>)}
      </div>
    )
}

export default Post;