import { ContactCard } from '../../components/ContactCard';

export function Contact({ user, self }) {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
                <ContactCard user={user} self={self ? self : false}/>
        </div>
    )
}