import React, { Component } from "react";
import slug from "../helpers/slug";
import { Link } from "../routes";

export default class PodcastsList extends Component {
    render() {
        audiosClips.map(clip => {
            return (
                <div key={clip.id} className="ultimosPodcasts">
                    {clip.title}

                    <div className="thumbnail">
                        <Link
                            route="podcast"
                            params={{
                                slugChannel: slug(clip.channel.title),
                                idChannel: slug(clip.channel.id),
                                slug: slug(clip.title),
                                id: slug(clip.id)
                            }}
                            prefecth
                            key={clip.id}
                        >
                            <img src="/static/play-solid.svg" alt="play" />
                        </Link>
                    </div>
                </div>
            );
        });
    }
}
