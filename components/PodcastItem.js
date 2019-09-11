import React, { Component } from "react";
import { Link } from "../routes";
import slug from "../helpers/slug";

export default class PodcastItem extends Component {
    render() {
        const { clip, openPodcast } = this.props;

        return (
            <div key={clip.id} className="ultimosPodcasts">
                {clip.title}

                <div className="thumbnail">
                    <Link
                        route="podcast"
                        params={{
                            slugChannel: slug(clip.channel.title),
                            idChannel: clip.channel.id,
                            slug: slug(clip.title),
                            id: clip.id
                        }}
                        prefetch
                    >
                        <a>
                            <img src="/static/play-solid.svg" alt="play" />
                        </a>
                    </Link>
                </div>

                <style jsx>{`
                    .ultimosPodcasts {
                        background: white;
                        padding: 10px 8px 10px 10px;
                        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.246);
                        border-radius: 4px;
                        margin-bottom: 10px;
                        display: grid;
                        grid-template-columns: 1fr 10%;
                        grid-template-rows: 1fr;
                    }

                    .ultimosPodcasts img {
                        margin: auto;
                        width: 15px;
                    }

                    .ultimosPodcasts .thumbnail {
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        cursor: pointer;
                    }

                    .ultimosPodcasts .thumbnail a {
                        display: inline-block;
                    }
                `}</style>
            </div>
        );
    }
}
