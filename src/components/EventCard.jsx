import './EventCard.css'

const FLAGS = {
  'Mexico': '🇲🇽',
  'South Africa': '🇿🇦',
  'South Korea': '🇰🇷',
  'Czechia': '🇨🇿',
  'Canada': '🇨🇦',
  'Bosnia & Herzegovina': '🇧🇦',
  'USA': '🇺🇸',
  'Paraguay': '🇵🇾',
  'Qatar': '🇶🇦',
  'Switzerland': '🇨🇭',
  'Brazil': '🇧🇷',
  'Morocco': '🇲🇦',
  'Haiti': '🇭🇹',
  'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Australia': '🇦🇺',
  'Türkiye': '🇹🇷',
  'Germany': '🇩🇪',
  'Curaçao': '🇨🇼',
  'Netherlands': '🇳🇱',
  'Japan': '🇯🇵',
  'Ivory Coast': '🇨🇮',
  'Ecuador': '🇪🇨',
  'Sweden': '🇸🇪',
  'Tunisia': '🇹🇳',
  'Spain': '🇪🇸',
  'Cape Verde': '🇨🇻',
  'Belgium': '🇧🇪',
  'Egypt': '🇪🇬',
  'Saudi Arabia': '🇸🇦',
  'Uruguay': '🇺🇾',
  'Iran': '🇮🇷',
  'New Zealand': '🇳🇿',
  'France': '🇫🇷',
  'Senegal': '🇸🇳',
  'Iraq': '🇮🇶',
  'Norway': '🇳🇴',
  'Argentina': '🇦🇷',
  'Algeria': '🇩🇿',
  'Austria': '🇦🇹',
  'Jordan': '🇯🇴',
  'Portugal': '🇵🇹',
  'Congo DR': '🇨🇩',
  'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'Croatia': '🇭🇷',
  'Ghana': '🇬🇭',
  'Panama': '🇵🇦',
  'Uzbekistan': '🇺🇿',
  'Colombia': '🇨🇴',
}

const GROUP_COLORS = {
  'Group A': '#E8192C',
  'Group B': '#7B2D92',
  'Group C': '#0057A8',
  'Group D': '#00A651',
  'Group E': '#FF6600',
  'Group F': '#E8192C',
  'Group G': '#7B2D92',
  'Group H': '#0057A8',
  'Group I': '#00A651',
  'Group J': '#FF6600',
  'Group K': '#E8192C',
  'Group L': '#7B2D92',
}

export default function EventCard({ event }) {
  const cardColor = GROUP_COLORS[event.matches[0]?.group] || '#E8192C'

  return (
    <article className="event-card" style={{ '--card-color': cardColor }}>
      <div className="card-header">
        <h3 className="card-title">{event.dayLabel}</h3>
      </div>
      <ul className="match-list">
        {event.matches.map((m, i) => {
          const gc = GROUP_COLORS[m.group] || '#E8192C'
          return (
            <li key={i} className="match-row">
              <span className="match-group" style={{ background: gc }}>{m.group}</span>
              <div className="match-teams">
                <span className="team">{FLAGS[m.home] ?? '🏳️'} {m.home}</span>
                <span className="vs">vs</span>
                <span className="team">{FLAGS[m.away] ?? '🏳️'} {m.away}</span>
              </div>
              <span className="match-meta">{m.time} · {m.venue}</span>
            </li>
          )
        })}
      </ul>
      <div className="card-footer">
        <a className="card-link" href={event.link} target="_blank" rel="noreferrer">
          View on FIFA.com ↗
        </a>
      </div>
    </article>
  )
}
