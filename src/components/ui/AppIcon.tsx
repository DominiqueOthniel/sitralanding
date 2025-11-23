'use client';

import React from 'react';
import {
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CubeIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CheckIcon,
  ArchiveBoxIcon,
  DocumentArrowDownIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  ArrowDownIcon,
  PhoneIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
  MapPinIcon,
  ChatBubbleLeftEllipsisIcon,
  BuildingStorefrontIcon,
  InformationCircleIcon,
  TruckIcon,
  BeakerIcon,
  UserIcon,
  CogIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FaceFrownIcon,
  PhotoIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

// Explicit icon mapping for better compatibility with Next.js/Webpack
const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  ShieldCheckIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CubeIcon,
  DocumentTextIcon,
  LightBulbIcon,
  CheckIcon,
  ArchiveBoxIcon,
  DocumentArrowDownIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  ArrowDownIcon,
  PhoneIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
  MapPinIcon,
  ChatBubbleLeftEllipsisIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  TruckIcon,
  BeakerIcon,
  UserIcon,
  CogIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FaceFrownIcon,
  PhotoIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserGroupIcon,
  HomeIcon,
};

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string; // Changed to string to accept dynamic values
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    // Get icon from explicit mapping
    const IconComponent = iconMap[name];

    // If component doesn't exist, use fallback
    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    // Render the icon component
    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon; 