import Link from 'next/link'
import { NavItem } from '@/types'

export default function MegaMenu({ items }: { items: NavItem[] }) {
    return (
        <div className="mega-menu">
            <div className="mega-menu__inner">
                {items.map((group) => (
                    <div key={group.label} className="mega-menu__group">
                        {group.children && group.children.length > 0 ? (
                            <>
                                <span className="mega-menu__group-title">{group.label}</span>
                                {group.children.map((child) => (
                                    <div key={child.label} className="mega-menu__sub">
                                        {child.children && child.children.length > 0 ? (
                                            <>
                                                <span className="mega-menu__sub-title">{child.label}</span>
                                                {child.children.map((link) => (
                                                    <Link key={link.label} href={link.href} className="mega-menu__link">
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </>
                                        ) : (
                                            <Link href={child.href} className="mega-menu__link">
                                                {child.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <Link href={group.href} className="mega-menu__link-main">
                                <span className="mega-menu__link-label">{group.label}</span>
                                {group.description && (
                                    <span className="mega-menu__desc">{group.description}</span>
                                )}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}