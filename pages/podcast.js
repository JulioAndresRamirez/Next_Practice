import React, { Component } from "react";
import { Link } from "../routes";
import "isomorphic-fetch";
import slug from "../helpers/slug";

export default class podcast extends Component {
    static async getInitialProps({ query }) {
        let idPodcast = query.id;

        let reqPodcast = await fetch(
            `https://api.audioboom.com/audio_clips/${idPodcast}.mp3`
        );
        let dataPodcast = await reqPodcast.json();
        let clip = dataPodcast.body.audio_clip;

        return { clip };
    }

    render() {
        const { clip } = this.props;
        return (
            <div>
                <header>Podcasts</header>

                <div className="modal">
                    <div className="clip">
                        <nav>
                            <Link
                                route="channel"
                                params={{
                                    slug: slug(clip.channel.title),
                                    id: clip.channel.id
                                }}
                                prefetch
                            >
                                <a className="close">
                                    <img
                                        width="14"
                                        style={{
                                            marginRight: 10
                                        }}
                                        src="/static/arrow-left-solid.svg"
                                        alt="back"
                                    />
                                    Volver
                                </a>
                            </Link>
                        </nav>

                        <picture>
                            <div
                                style={{
                                    backgroundImage: `url(${clip.urls.image ||
                                        clip.channel.urls.logo_image.original})`
                                }}
                            />
                        </picture>

                        <div className="player">
                            <h3>{clip.title}</h3>
                            <h6>{clip.channel.title}</h6>
                            <audio controls autoPlay={true}>
                                <source
                                    src={clip.urls.high_mp3}
                                    type="audio/mpeg"
                                />
                            </audio>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    nav {
                        background: none;
                    }
                    nav a {
                        display: inline-block;
                        padding: 8px 12px;
                        color: white;
                        cursor: pointer;
                        text-decoration: none;
                        background: white;
                        color: #8756ca;
                        margin: 10px;
                        border-radius: 50px;
                    }
                    .clip {
                        display: flex;
                        height: 100%;
                        flex-direction: column;
                        background: #8756ca;
                        color: white;
                    }
                    picture {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: 1 1;
                        flex-direction: column;
                        width: auto;
                        padding: 10%;
                    }
                    picture div {
                        width: 100%;
                        height: 100%;
                        background-position: 50% 50%;
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                    .player {
                        padding: 30px;
                        background: rgba(0, 0, 0, 0.3);
                        text-align: center;
                    }
                    h3 {
                        margin: 0;
                    }
                    h6 {
                        margin: 0;
                        margin-top: 1em;
                    }
                    audio {
                        margin-top: 2em;
                        width: 100%;
                    }

                    .modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 99999;
                    }

                    .close {
                        display: flex;
                        justify-content: space-between;
                        align-content: center;
                    }
                `}</style>

                <style jsx global>{`
                    body {
                        margin: 0;
                        font-family: system-ui;
                        background: white;
                    }
                `}</style>
            </div>
        );
    }
}
