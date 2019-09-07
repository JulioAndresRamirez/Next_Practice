import React, { Component } from "react";
import { Link } from "../routes";
import slug from "../helpers/slug";

export default class ChannelGrid extends Component {
    render() {
        const { channels } = this.props;
        return (
            <div>
                <div className="channels">
                    {channels.map(ch => {
                        return (
                            <Link
                                route="channel"
                                params={{
                                    slug: slug(ch.title),
                                    id: ch.id
                                }}
                                prefetch
                            >
                                <div key={ch.id}>
                                    <a className="channel">
                                        <img
                                            src={ch.urls.logo_image.original}
                                            alt="logo"
                                        />
                                    </a>
                                    <h2>{ch.title}</h2>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <style jsx>{`
                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(
                            auto-fill,
                            minmax(160px, 1fr)
                        );
                        color: black;
                    }

                    .channel {
                        display: flex;
                        border-radius: 4px;
                        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
                        text-decoration: none;
                        overflow: hidden;
                        transition: all ease 0.2s;
                    }

                    .channel img {
                        margin: auto;
                        width: 100%;
                    }

                    .channel:hover {
                        transform: translateY(-0.5em);
                    }

                    h2 {
                        padding: 5px;
                        font-size: 12px;
                        font-weight: 600;
                        margin: 0.5em 0 0 0;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}
