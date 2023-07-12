import { ContactCard } from '../../components/ContactCard';

export function Contact({ user }) {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
                <ContactCard user={user} />
        </div>
    )
}