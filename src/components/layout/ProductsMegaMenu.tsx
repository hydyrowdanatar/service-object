import Link from 'next/link'
import { NavItem } from '@/types'

export default function ProductsMegaMenu({ items }: { items: NavItem[] }) {
    return (
        <div className="products-mega-menu">
            <div className="products-mega-menu__head">
                {items.map((category) => (
                    <div key={`${category.label}-head`} className="products-mega-menu__head-item">
                        {category.label}
                    </div>
                ))}
            </div>

            <div className="products-mega-menu__body">
                {items.map((category) => (
                    <div key={category.label} className="products-mega-menu__col">
                        {category.children?.map((group) => (
                            <div key={group.label} className="products-mega-menu__group">
                                <p className="products-mega-menu__group-title">{group.label}</p>
                                {group.children?.map((link) => (
                                    <Link key={link.label} href={link.href} className="products-mega-menu__link">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
