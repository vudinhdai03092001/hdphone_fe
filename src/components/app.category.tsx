'use client'
import {
    MDBListGroup, MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { useGetCategoriesActiveQuery } from '@/store/category/category.service';
import { useEffect, useState } from 'react';
import { ICategory } from '@/store/category/category.interface';
interface IProps {
    categories: ICategory[]
}
const AppCategory = (props: IProps) => {
    const { categories } = props
    return (
        <MDBListGroup light>
            {categories?.map((item, index) => {
                return (
                    <MDBListGroupItem
                        key={index}
                        tag='button'
                        action
                        noBorders
                        aria-current='true'
                        type='button'
                        className='px-3'
                    >
                        {item.name}
                    </MDBListGroupItem>
                )
            })}
        </MDBListGroup>
    )
}
export default AppCategory